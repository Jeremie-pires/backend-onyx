const express = require('express');
const router = express.Router();
const productsService = require('../services/products');

router.get('/', productsService.searchProduct);
router.get('/:id', productsService.getProductById);
router.post('/', productsService.createProduct);
router.put('/:id', productsService.updateProduct);
router.delete('/:id', productsService.deleteProduct);

module.exports = router;
