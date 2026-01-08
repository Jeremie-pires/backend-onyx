const { Op } = require('sequelize');
const { Product, dbInstance } = require('../models');

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ where: { id } });
        if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const searchProduct = async (req, res) => {
    try {
        const search_key = req.query.search;
        const conditions = (search_key) ? { where: { name: { [Op.like]: '%'+ search_key +'%' } } } : {};
        const products = await Product.findAll(conditions);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createProduct = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id, name, stock, price } = req.body;
        const product = await Product.create({ id, name, stock, price }, { transaction });
        await transaction.commit();
        return res.status(201).json({ status: "Produit créé avec succès", product });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la création du produit", error: error.message });
    }
}

const updateProduct = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { name, stock, price } = req.body;
        const { id } = req.params;
        const [updated] = await Product.update({ name, stock, price }, { where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Produit mis à jour avec succès", updated });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la mise à jour du produit", error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const transaction = await dbInstance.transaction();
    try {
        const { id } = req.params;
        await Product.destroy({ where: { id }, transaction });
        await transaction.commit();
        return res.status(200).json({ status: "Produit supprimé avec succès" });
    } catch (error) {
        await transaction.rollback();
        return res.status(400).json({ status: "Erreur de la suppression du produit", error: error.message });
    }
}

module.exports = { getProductById, createProduct, searchProduct, updateProduct, deleteProduct };
