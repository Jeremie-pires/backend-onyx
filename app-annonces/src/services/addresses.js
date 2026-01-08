const { Op } = require('sequelize');
const { Address, dbInstance } = require('../models');

const getAddressById = async (req, res) => {
    try {
        const id = req.params.id;
        const address = await Address.findOne({ where: { id } });
        if (!address) return res.status(404).json({ message: 'Adresse non trouvée' });
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchAddress = async (req, res) => {
    try {
        const search_key = req.query.search;
        const conditions = (search_key) ? {
            where: {
                [Op.or]: [
                    { city: { [Op.like]: '%'+ search_key +'%' } },
                    { street: { [Op.like]: '%'+ search_key +'%' } }
                ]
            }
        } : {};
        const addresses = await Address.findAll(conditions);
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createAddress = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id, street, city, postal_code, country, building, floor, apartment, complement } = req.body;
        const address = await Address.create({
            id, street, city, postal_code, country, building, floor, apartment, complement
        }, { transaction });
        await transaction.commit();
        return res.status(201).json({ status: "Adresse créée avec succès", address });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la création de l'adresse", error: error.message });
    }
}

const updateAddress = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { street, city, postal_code, country, building, floor, apartment, complement } = req.body;
        const { id } = req.params;
        const [updated] = await Address.update({
            street, city, postal_code, country, building, floor, apartment, complement
        }, { where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Adresse mise à jour avec succès", updated });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la mise à jour de l'adresse", error: error.message });
    }
}

const deleteAddress = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id } = req.params;
        await Address.destroy({ where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Adresse supprimée avec succès" });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la suppression de l'adresse", error: error.message });
    }
}

module.exports = { getAddressById, createAddress, searchAddress, updateAddress, deleteAddress };
