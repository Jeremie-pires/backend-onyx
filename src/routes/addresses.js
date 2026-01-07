const express = require('express');
const router = express.Router();
const addressesService = require('../services/addresses');

router.get('/', addressesService.searchAddress);
router.get('/:id', addressesService.getAddressById);
router.post('/', addressesService.createAddress);
router.put('/:id', addressesService.updateAddress);
router.delete('/:id', addressesService.deleteAddress);

module.exports = router;
