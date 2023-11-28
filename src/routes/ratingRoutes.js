const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const authServices = require('../services/authMiddleware');

// Avaliar um anime por nome
router.post('/:animeTitle/rate', authServices.authenticateMiddleware, ratingController.rateAnime);
// Listar avaliações 
router.get('/list', authServices.authenticateMiddleware, ratingController.listRating);
// Edita a quantidade de avaliações
router.post('/:animeTitle/rate', authServices.authenticateMiddleware, ratingController.rateAnime);
// Deleta todas as avaliações
router.post('/:animeTitle/rate', authServices.authenticateMiddleware, ratingController.rateAnime);

module.exports = router;
