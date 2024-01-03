const express = require('express');
const router = express.Router();
const tvShowController = require('../controllers/tvShowController');
const { validateToken } = require('../middleware/authMiddleware');

// Route to get information about a specific episode
router.get('/:tvShowId/seasons/:seasonNumber/episodes/:episodeNumber',validateToken, tvShowController.getEpisodeInfo);

module.exports = router;
