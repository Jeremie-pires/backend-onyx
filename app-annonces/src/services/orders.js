const { Op } = require('sequelize');
const { Order, Account, Ticket, OrderItemMerch, dbInstance } = require('../models');

const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findOne({
            where: { id },
            include: [
                { model: Account, as: 'Account' },
                { model: Ticket, as: 'Tickets' },
                { model: OrderItemMerch, as: 'OrderItemMerchs' }
            ]
        });
        if (!order) return res.status(404).json({ message: 'Commande non trouvée' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchOrder = async (req, res) => {
    try {
        const account_id = req.query.account_id;
        const conditions = (account_id) ? { where: { account_id } } : {};
        const orders = await Order.findAll({
            ...conditions,
            include: [
                { model: Account, as: 'Account' },
                { model: Ticket, as: 'Tickets' },
                { model: OrderItemMerch, as: 'OrderItemMerchs' }
            ]
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createOrder = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id, account_id, status, address_billing, city_billing, postal_code_billing, country_billing } = req.body;
        const order = await Order.create({
            id, account_id, status, address_billing, city_billing, postal_code_billing, country_billing
        }, { transaction });
        await transaction.commit();
        return res.status(201).json({ status: "Commande créée avec succès", order });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la création de la commande", error: error.message });
    }
}

const updateOrder = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { account_id, status, address_billing, city_billing, postal_code_billing, country_billing } = req.body;
        const { id } = req.params;
        const [updated] = await Order.update({
            account_id, status, address_billing, city_billing, postal_code_billing, country_billing
        }, { where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Commande mise à jour avec succès", updated });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la mise à jour de la commande", error: error.message });
    }
}

const deleteOrder = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id } = req.params;
        await Order.destroy({ where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Commande supprimée avec succès" });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la suppression de la commande", error: error.message });
    }
}

module.exports = { getOrderById, createOrder, searchOrder, updateOrder, deleteOrder };
