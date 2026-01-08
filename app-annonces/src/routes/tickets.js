const express = require('express');
const router = express.Router();
const ticketsService = require('../services/tickets');

router.get('/', ticketsService.searchTicket);
router.get('/:id', ticketsService.getTicketById);
router.post('/', ticketsService.createTicket);
router.put('/:id', ticketsService.updateTicket);
router.delete('/:id', ticketsService.deleteTicket);

module.exports = router;
