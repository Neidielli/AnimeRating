const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const animeRoutes = require('./routes/animeRoutes'); // Nova importação
const ratingRoutes = require('./routes/ratingRoutes'); // Nova importação
const customRoutes = require('./routes/customRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/animes', animeRoutes); 
app.use('/ratings', ratingRoutes); 
app.use('/custom', customRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    errorHandler.handle(res, err);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
