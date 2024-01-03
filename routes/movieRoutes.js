const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const { validateToken } = require('../middleware/authMiddleware');

// Route to get all movies (requires token validation)
router.get('/movies', validateToken, movieController.getAllMovies);
// Route to create a new movie (requires token validation)
router.post('/create/movie', validateToken, movieController.createMovie);

module.exports = router;