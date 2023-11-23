const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const authService = require('../services/authService');

router.post('/:animeId/rate', authService.authenticateUser, ratingController.rateAnime);

module.exports = router;
