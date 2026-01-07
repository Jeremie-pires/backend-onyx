const express = require('express');
const router = express.Router();
const artistsService = require('../services/artists');

router.get('/', artistsService.searchArtist);
router.get('/:id', artistsService.getArtistById);
router.post('/', artistsService.createArtist);
router.put('/:id', artistsService.updateArtist);
router.delete('/:id', artistsService.deleteArtist);

module.exports = router;
