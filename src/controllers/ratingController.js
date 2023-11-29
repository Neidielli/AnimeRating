const Anime = require('../models/Anime');
const Rating = require('../models/Rating');
const user = require('../models/User');
const errorHandler = require('../utils/errorHandler');

const rateAnime = async (req, res) => {
    // try {
        const animeTitle = req.params.animeTitle;
        const ratingValue = req.body.rating;

        // Encontrar o anime pelo nome
        const anime = await Anime.findOne({ title: animeTitle });
        if (!anime) {
            return res.status(404).json({ error: 'Anime not found' });
        }

        // Criar um novo Rating
        const rating = new Rating({ rating : ratingValue });

        // Salvar o Rating
        await rating.save();

        // Adicionar a avaliação ao array de avaliações do anime
        anime.rating.push(rating._id);
        await anime.save();

        res.json({ success: true, message: 'Rating added successfully' });
    // } catch (error) {
    //     errorHandler.handle(res, error);
    // }
};

const listRatingsByValue = async (req, res) => {
    try {
        const rating = req.params.rating;

        // Verifica se o valor fornecido é um número
        if (isNaN(rating)) {
            return res.status(400).json({ error: 'Invalid value parameter. Please provide a valid number.' });
        }

        const ratings = await Rating.find({ rating: Number(rating) });

        res.json(ratings);
    } catch (error) {
        errorHandler.handle(res, error);
    }
};

const editAnimeRatings = async (req, res) => {
    try {
        const animeTitle = req.params.title;
        const { newRatings } = req.body;

        // Verifica se o anime a ser editado existe
        const animeToUpdate = await Anime.findOne({ title: animeTitle });
        if (!animeToUpdate) {
            return res.status(404).json({ error: 'Anime not found' });
        }

        // Atualiza o array de avaliações do anime
        animeToUpdate.rating = newRatings;

        // Salva as alterações no banco de dados
        await animeToUpdate.save();

        res.status(200).json({ message: 'Anime ratings updated successfully', anime: animeToUpdate });
    } catch (error) {
        errorHandler.handle(res, error);
    }
};


  

module.exports = {
    rateAnime,
    listRatingsByValue,
    editAnimeRatings
};
