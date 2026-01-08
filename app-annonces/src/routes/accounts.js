const express = require('express');
const router = express.Router();
const accountsService = require('../services/accounts');

// Routes publiques (pas d'authentification requise)
router.post('/register', accountsService.createAccount);
router.post('/login', accountsService.login);

// Routes protégées - authentification requise
router.post('/logout', verifyToken, accountsService.logout);
router.get('/:id', verifyToken, accountsService.getAccountById);
router.put('/:id', verifyToken, accountsService.updateAccount);

// Routes admin uniquement
router.get('/', verifyToken, checkRole('admin'), accountsService.searchAccount);
router.delete('/:id', verifyToken, checkRole('admin'), accountsService.deleteAccount);


module.exports = router;
