const { Op } = require('sequelize');
const { Account, Address, Order, Ticket, dbInstance } = require('../models');

const getAccountById = async (req, res) => {
    try {
        const id = req.params.id;
        const account = await Account.findOne({
            where: { id },
            include: [
                { model: Address, as: 'Address' },
                { model: Order, as: 'Orders' },
                { model: Ticket, as: 'Tickets' }
            ],
            attributes: { exclude: ['password'] }
        });
        if (!account) return res.status(404).json({ message: 'Compte non trouvé' });
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchAccount = async (req, res) => {
    try {
        const search_key = req.query.search;
        const conditions = (search_key) ? {
            where: {
                [Op.or]: [
                    { name: { [Op.like]: '%'+ search_key +'%' } },
                    { firstname: { [Op.like]: '%'+ search_key +'%' } },
                    { email: { [Op.like]: '%'+ search_key +'%' } }
                ]
            }
        } : {};
        const accounts = await Account.findAll({
            ...conditions,
            include: [
                { model: Address, as: 'Address' }
            ],
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createAccount = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id, address_id, name, firstname, email, password, phone, role } = req.body;
        const account = await Account.create({
            id, address_id, name, firstname, email, password, phone, role
        }, { transaction });
        await transaction.commit();
        const { password: _, ...accountWithoutPassword } = account.toJSON();
        return res.status(201).json({ status: "Compte créé avec succès", account: accountWithoutPassword });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la création du compte", error: error.message });
    }
}

const updateAccount = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { address_id, name, firstname, email, password, phone, role } = req.body;
        const { id } = req.params;
        const updateData = { address_id, name, firstname, email, phone, role };
        if (password) updateData.password = password;
        const [updated] = await Account.update(updateData, { where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Compte mis à jour avec succès", updated });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la mise à jour du compte", error: error.message });
    }
}

const deleteAccount = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id } = req.params;
        await Account.destroy({ where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Compte supprimé avec succès" });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la suppression du compte", error: error.message });
    }
}

module.exports = { getAccountById, createAccount, searchAccount, updateAccount, deleteAccount };
