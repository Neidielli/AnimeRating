const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ratings: [{ type: Number }],
});

module.exports = mongoose.model('Anime', animeSchema);
