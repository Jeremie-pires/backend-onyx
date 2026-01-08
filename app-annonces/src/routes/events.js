const express = require('express');
const router = express.Router();
const eventsService = require('../services/events');

router.get('/', eventsService.searchEvent);
router.get('/:id', eventsService.getEventById);
router.post('/', eventsService.createEvent);
router.put('/:id', eventsService.updateEvent);
router.delete('/:id', eventsService.deleteEvent);

module.exports = router;
