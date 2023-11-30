const Anime = require('../models/Anime');
const Rating = require('../models/Rating');
const user = require('../models/User');
const errorHandler = require('../utils/errorHandler');

const rateAnime = async (req, res) => {
    // try {
        const animeTitle = req.params.animeTitle;
        const ratingValue = req.body.rating;
        const comments = req.body.comments;

        // Encontrar o anime pelo nome
        const anime = await Anime.findOne({ title: animeTitle });
        if (!anime) {
            return res.status(404).json({ error: 'Anime not found' });
        }

        // Criar um novo Rating
        const rating = new Rating({ rating : ratingValue, comments: comments });

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

const editCommentsRatings = async (req, res) => {
    const comment = req.params.comments;
    const updatedComments = req.body;


    const commentsToUpdate = await Rating.findOne({ comments: comment });

    // Atualiza o Comentário
    commentsToUpdate.comments = updatedComments.comments || commentsToUpdate.comments;

    // Salva as alterações
    await commentsToUpdate.save();

    res.status(200).json({ message: 'Hello Admin, Comments updated successfully' });
};

const deleteRating = async (req, res) => {
    const ratingId = req.params._id;

    // Verifica se o rating a ser excluido existe
    const ratingToDelete = await Rating.findOne({ _id: ratingId });
    if (!ratingToDelete) {
        return res.status(404).json({ error: 'Rating not found' });
    }

    // Remove o rating do banco de dados
    await ratingToDelete.deleteOne();

    res.status(200).json({ message: 'Hello Admin, Rating deleted successfully' });
};


  

module.exports = {
    rateAnime,
    listRatingsByValue,
    editCommentsRatings,
    deleteRating
};
