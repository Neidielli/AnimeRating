// const Anime = require('../models/Anime');
// const errorHandler = require('../utils/errorHandler');

// const createAnime = async (req, res) => {
//     try {
//         const { title, description } = req.body;
//         const anime = new Anime({ title, description, ratings: [] });
//         await anime.save();
//         res.json({ success: true, message: 'Anime created successfully' });
//     } catch (error) {
//         errorHandler.handle(res, error);
//     }
// };

// const listAnimes = async (req, res) => {
//     try {
//         const animes = await Anime.find();
//         res.json(animes);
//     } catch (error) {
//         errorHandler.handle(res, error);
//     }
// };

// module.exports = {
//     createAnime,
//     listAnimes,
// };
