const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const animeRoutes = require('./src/routes/animeRoutes'); 
const ratingRoutes = require('./src/routes/ratingRoutes');
const customRoutes = require('./src/routes/customRoutes');
const errorHandler = require('./src/utils/errorHandler');

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/animerating', { useNewUrlParser: true, useUnifiedTopology: true });

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
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Server running on port: ${PORT}`);
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
});