const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    ratings: [{ type: mongoose.Schema.Types.Number, ref: 'Rating' }],
});

module.exports = mongoose.model('Anime', animeSchema);
