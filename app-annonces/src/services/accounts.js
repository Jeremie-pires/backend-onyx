const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

        const hashedPassword = await bcrypt.hash(password, 10);

        const account = await Account.create({
            id, address_id, name, firstname, email, password: hashedPassword, phone, role
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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Email et mot de passe requis' });
        }
        const account = await Account.findOne({ where: { email } });
        if (!account) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }
        
        const isPasswordValid = await bcrypt.compare(password, account.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }
        const token = jwt.sign(
            { 
                id: account.id, 
                email: account.email, 
                role: account.role 
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
        );
        
        const { password: _, ...accountWithoutPassword } = account.toJSON();
        
        res.status(200).json({
            message: 'Connexion réussie',
            token,
            user: accountWithoutPassword
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const logout = async (req, res) => {
    try {
        // Avec JWT, le logout est géré côté client
        // Cette route confirme simplement que le token est valide avant déconnexion
        res.status(200).json({ 
            message: 'Déconnexion réussie',
            info: 'Supprimez le token côté client'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAccountById, createAccount, searchAccount, updateAccount, deleteAccount, login, logout };