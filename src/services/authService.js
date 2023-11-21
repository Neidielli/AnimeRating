const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.generateToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Authentication failed. User not found.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Authentication failed. Incorrect password.');
    }

    const token = this.generateToken(user);
    return { user, token };
};
