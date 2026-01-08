const { Op } = require('sequelize');
const { Ticket, Event, Order, Account, dbInstance } = require('../models');

const getTicketById = async (req, res) => {
    try {
        const id = req.params.id;
        const ticket = await Ticket.findOne({
            where: { id },
            include: [
                { model: Event, as: 'Event' },
                { model: Order, as: 'Order' },
                { model: Account, as: 'Account' }
            ]
        });
        if (!ticket) return res.status(404).json({ message: 'Ticket non trouvé' });
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchTicket = async (req, res) => {
    try {
        const { account_id, event_id, order_id } = req.query;
        const whereConditions = {};
        if (account_id) whereConditions.account_id = account_id;
        if (event_id) whereConditions.event_id = event_id;
        if (order_id) whereConditions.order_id = order_id;
        
        const conditions = Object.keys(whereConditions).length > 0 ? { where: whereConditions } : {};
        const tickets = await Ticket.findAll({
            ...conditions,
            include: [
                { model: Event, as: 'Event' },
                { model: Order, as: 'Order' },
                { model: Account, as: 'Account' }
            ]
        });
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createTicket = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id, event_id, order_id, account_id, qrcode, price_sold } = req.body;
        const ticket = await Ticket.create({
            id, event_id, order_id, account_id, qrcode, price_sold
        }, { transaction });
        await transaction.commit();
        return res.status(201).json({ status: "Ticket créé avec succès", ticket });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la création du ticket", error: error.message });
    }
}

const updateTicket = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { event_id, order_id, account_id, qrcode, price_sold } = req.body;
        const { id } = req.params;
        const [updated] = await Ticket.update({
            event_id, order_id, account_id, qrcode, price_sold
        }, { where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Ticket mis à jour avec succès", updated });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la mise à jour du ticket", error: error.message });
    }
}

const deleteTicket = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id } = req.params;
        await Ticket.destroy({ where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Ticket supprimé avec succès" });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la suppression du ticket", error: error.message });
    }
}

module.exports = { getTicketById, createTicket, searchTicket, updateTicket, deleteTicket };
