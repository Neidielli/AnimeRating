const Anime = require('../models/Anime');
const Rating = require('../models/Rating');
const errorHandler = require('../utils/errorHandler');

const rateAnime = async (req, res) => {
    // try {
        const animeTitle = req.params.animeTitle;
        const rating = req.body.rating;

        // Encontrar o anime pelo nome
        const anime = await Anime.findOne({ title: animeTitle });
        if (!anime) {
            return res.status(404).json({ error: 'Anime not found' });
        }

        // Adicionar a avaliação ao array de avaliações do anime
        anime.ratings.push(rating);
        await anime.save();

        res.json({ success: true, message: 'Rating added successfully' });
    // } catch (error) {
    //     errorHandler.handle(res, error);
    // }
};

const listRating = async (req, res) => {
    try {
        const rating = await Rating.find();
        res.json(rating);
    } catch (error) {
        errorHandler.handle(res, error);
    }
};

module.exports = {
    rateAnime,
    listRating
};
