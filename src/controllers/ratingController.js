// const Anime = require('../models/Anime');
// const errorHandler = require('../utils/errorHandler');

// exports.rateAnime = async (req, res) => {
//     try {
//         const animeId = req.params.animeId;
//         const rating = req.body.rating;

//         const anime = await Anime.findById(animeId);
//         if (!anime) {
//             return res.status(404).json({ error: 'Anime not found' });
//         }

//         anime.ratings.push(rating);
//         await anime.save();

//         res.json({ success: true, message: 'Rating added successfully' });
//     } catch (error) {
//         errorHandler.handle(res, error);
//     }
// };
