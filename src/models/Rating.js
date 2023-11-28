const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    anime: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime', required: true },
});

module.exports = mongoose.model('Rating', ratingSchema);
