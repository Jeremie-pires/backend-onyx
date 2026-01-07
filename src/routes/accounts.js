const express = require('express');
const router = express.Router();
const accountsService = require('../services/accounts');

router.get('/', accountsService.searchAccount);
router.get('/:id', accountsService.getAccountById);
router.post('/', accountsService.createAccount);
router.put('/:id', accountsService.updateAccount);
router.delete('/:id', accountsService.deleteAccount);

module.exports = router;
