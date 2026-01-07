const { Op } = require('sequelize');
const { Event, dbInstance } = require('../models');

const getEventById = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Event.findOne({ where: { id }, include: ['Address', 'Artists', 'Tickets'] });
        if (!event) return res.status(404).json({ message: 'Événement non trouvé' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchEvent = async (req, res) => {
    try {
        const search_key = req.query.search;
        const conditions = (search_key) ? { where: { name: { [Op.like]: '%'+ search_key +'%' } }, include: ['Address', 'Artists'] } : { include: ['Address', 'Artists'] };
        const events = await Event.findAll(conditions);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createEvent = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id, name, address_id, date, description, price_standard } = req.body;
        const event = await Event.create({ id, name, address_id, date, description, price_standard }, { transaction });
        await transaction.commit();
        return res.status(201).json({ status: "Événement créé avec succès", event });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la création de l'événement", error: error.message });
    }
}

const updateEvent = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { name, address_id, date, description, price_standard } = req.body;
        const { id } = req.params;
        const [updated] = await Event.update({ name, address_id, date, description, price_standard }, { where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Événement mis à jour avec succès", updated });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la mise à jour de l'événement", error: error.message });
    }
}

const deleteEvent = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id } = req.params;
        await Event.destroy({ where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Événement supprimé avec succès" });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la suppression de l'événement", error: error.message });
    }
}

module.exports = { getEventById, createEvent, searchEvent, updateEvent, deleteEvent };
