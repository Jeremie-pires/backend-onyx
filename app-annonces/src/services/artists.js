const { Op } = require('sequelize');
const { Artist, dbInstance } = require('../models');

const getArtistById = async (req, res) => {
    try {
        const id = req.params.id;
        const artist = await Artist.findOne({ where: { id }, include: ['Events', 'Links'] });
        if (!artist) return res.status(404).json({ message: 'Artiste non trouvé' });
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchArtist = async (req, res) => {
    try {
        const search_key = req.query.search;
        const conditions = (search_key) ? { where: { name: { [Op.like]: '%'+ search_key +'%' } }, include: ['Links'] } : { include: ['Links'] };
        const artists = await Artist.findAll(conditions);
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createArtist = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id, name, description } = req.body;
        const artist = await Artist.create({ id, name, description }, { transaction });
        await transaction.commit();
        return res.status(201).json({ status: "Artiste créé avec succès", artist });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la création de l'artiste", error: error.message });
    }
}

const updateArtist = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { name, description } = req.body;
        const { id } = req.params;
        const [updated] = await Artist.update({ name, description }, { where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Artiste mis à jour avec succès", updated });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la mise à jour de l'artiste", error: error.message });
    }
}

const deleteArtist = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id } = req.params;
        await Artist.destroy({ where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Artiste supprimé avec succès" });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la suppression de l'artiste", error: error.message });
    }
}

module.exports = { getArtistById, createArtist, searchArtist, updateArtist, deleteArtist };
