const User = require('../models/User');
const authService = require('../services/authService');
const errorHandler = require('../utils/errorHandler');

const register = async (req, res) => {
    console.log('oie')
    // try {
        const { name, email, password } = req.body;

        // Verifica se o e-mail já está em uso
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // Cria um novo usuário
        const user = new User({ name, email, password });
        await user.save();

        // Gera um token JWT para o novo usuário
        // const token = authService.generateToken(user);

        // res.json({ success: true, token });
    // } catch (error) {
    //     errorHandler.handle(res, error);
    // }
};

module.exports = {
    register
};
