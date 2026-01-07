const express = require('express');
const router = express.Router();
const { validateAnnonce } = require('../middlewares/annonces');
const { getAllAnnonces, getAnnonce } = require('../services/annonces');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Liste des annonces'
    });
});

router.get('/all', (req, res, next) => {
    res.status(200).send();
});

router.get('/:id', getAnnonce);

router.post('/', validateAnnonce, (req, res, next) => {
    res.status(201).json({
        message: "success"
    });
});

module.exports = router;