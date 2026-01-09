const express = require('express');
const router = express.Router();
const accountsService = require('../services/accounts');
const { verifyToken, checkRole } = require('../middlewares/auth');

// Routes publiques (pas d'authentification requise)
router.post('/register', accountsService.createAccount);
router.post('/login', accountsService.login);
router.get('/search', accountsService.searchAccount);

// Routes protégées - authentification requise
router.post('/logout', verifyToken, accountsService.logout);
router.get('/:id', verifyToken, accountsService.getAccountById);
router.put('/:id', verifyToken, accountsService.updateAccount);

// Routes admin uniquement
router.delete('/:id', verifyToken, checkRole('admin'), accountsService.deleteAccount);


module.exports = router;
