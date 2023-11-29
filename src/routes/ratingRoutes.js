const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const authServices = require('../services/authMiddleware');

// Avaliar um anime por nome
router.post('/:animeTitle/rate', authServices.authenticateMiddleware, ratingController.rateAnime);
// Listar avaliações por 0-10
router.get('/listByValue/:rating', authServices.authenticateMiddleware, ratingController.listRatingsByValue);
// Edita a quantidade de avaliações de um anime
router.put('/edit/:title/ratings', authServices.authenticateMiddleware, ratingController.editAnimeRatings);
// Deleta todas as avaliações
router.post('/:animeTitle/rate', authServices.authenticateMiddleware, ratingController.rateAnime);

module.exports = router;
