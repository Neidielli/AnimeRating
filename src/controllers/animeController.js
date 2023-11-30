const Anime = require('../models/Anime');
const Rating = require('../models/Rating');
const errorHandler = require('../utils/errorHandler');

const createAnime = async (req, res) => {
    // try {
        const { title, description, ratings } = req.body;

        // Verifica se o anime a ser criado existe
        const existingAnime = await Anime.findOne({ title });
        if (existingAnime) {
            return res.status(400).json({ error: 'Anime already created' });
        }

        // Cria um novo anime
        const anime = new Anime({ title, description, ratings: [] });
        await anime.save();
        res.json({ success: true, message: 'Anime created successfully' });
    // } catch (error) {
    //     errorHandler.handle(res, error);
    // }
};

const editAnime = async (req, res) => {
        const animeTitle = req.params.title;
        const updatedAnime = req.body;

        // Verifica se o anime a ser editado existe
        const animeToUpdate = await Anime.findOne({ title: animeTitle });
        if (!animeToUpdate) {
            return res.status(404).json({ error: 'Anime not found' });
        }

        // Atualiza os dados do anime
        animeToUpdate.title = updatedAnime.title || animeToUpdate.title;
        animeToUpdate.description = updatedAnime.description || animeToUpdate.description;
                
        // Salva as alterações no banco de dados
        await animeToUpdate.save();

        res.status(200).json({ message: 'Hello Admin, Anime updated successfully', anime: animeToUpdate });
};

const deleteAnime = async (req, res) => {
        const animeTitle = req.params.title;

        // Verifica se o anime a ser excluido existe
        const animeToDelete = await Anime.findOne({ title: animeTitle });
        if (!animeToDelete) {
            return res.status(404).json({ error: 'Anime not found' });
        }

        // Remove o anime do banco de dados
        await animeToDelete.deleteOne();

        res.status(200).json({ message: 'Hello Admin, Anime deleted successfully' });
};

const listAnimes = async (req, res) => {
    try {
        const animes = await Anime.find().populate('rating');
        res.json(animes);
    } catch (error) {
        errorHandler.handle(res, error);
    }
};

const getAnimeByTitle = async (req, res) => {
    // precisa verificar se o anime procurado existe
    const title = req.params.title;

    const animes = await Anime.findOne({ title: title}).populate('rating');
    res.json(animes);
};

module.exports = {
    createAnime,
    editAnime,
    deleteAnime,
    listAnimes,
    getAnimeByTitle
};
