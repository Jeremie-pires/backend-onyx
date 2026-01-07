const express = require('express');
const router = express.Router();
const ordersService = require('../services/orders');

router.get('/', ordersService.searchOrder);
router.get('/:id', ordersService.getOrderById);
router.post('/', ordersService.createOrder);
router.put('/:id', ordersService.updateOrder);
router.delete('/:id', ordersService.deleteOrder);

module.exports = router;
