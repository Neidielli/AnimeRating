const User = require('../models/User');
const authService = require('../services/authService');
const errorHandler = require('../utils/errorHandler');

const register = async (req, res) => {
        const { name, email, password, role } = req.body;

        // Verifica se o e-mail já está em uso
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
    
        console.log('User antes:', user);
        // Cria um novo usuário
        const user = new User({ name, email, password });
        await user.save();
        console.log('Usuário após o salvamento no Mongoose:', user);
        res.json({ success: true, message: 'User created successfully' });

};

const adminAddUser = async (req, res) => {
        // verifica se usuário é admin
        if (userData.role == 'admin') {
            const { name, email, password } = req.body;

            // Verifica se o e-mail já está em uso
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already in use' });
            }

            // Cria um novo usuário
            const user = new User({ name, email, password });
            await user.save();
            res.json({ success: true, message: 'Hello Admin, User created successfully' });
        } else {
            // Apenas usuários administradores
            throw new Error('Unauthorized');
        }       
};

const adminEditUser = async (req, res) => {
    // verifica se usuário é admin
    if (userData.role == 'admin') {
        const userId = req.params.userId;
        const updatedUserData = req.body;

        // Verifica se o usuário a ser editado existe
        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Atualiza os dados do usuário
        userToUpdate.name = updatedUserData.name || userToUpdate.name;
        userToUpdate.email = updatedUserData.email || userToUpdate.email;
        userToUpdate.password = updatedUserData.password || userToUpdate.password;
                
        // Salva as alterações no banco de dados
        await userToUpdate.save();

        res.status(200).json({ message: 'Usuário atualizado com sucesso', user: userToUpdate });
    } else {
        // Apenas usuários administradores 
        throw new Error('Unauthorized');
    }       
};

const adminDeletUser = async (req, res) => {
    // verifica se usuário é admin
    if (userData.role == 'admin') {
        const userId = req.params.userId;

        // Verifica se o usuário a ser excluído existe
        const userToDelete = await User.findById(userId);
        if (!userToDelete) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Remove o usuário do banco de dados
        await userToDelete.remove();

        res.json({ success: true, message: 'Hello Admin, User deleted successfully' });
    } else {
        // Apenas usuários administradores 
        throw new Error('Unauthorized');
    }       
};

const adminAddAdmin = async (req, res) => {
    // verifica se usuário é admin
    if (userData.role == 'admin') {
        const newAdminData = req.body;

        // Cria um novo usuário com a função de administrador
        const newAdmin = await User.create({
            username: newAdminData.username,
            password: newAdminData.password,
            email: newAdminData.email,
            role: 'admin',
        });

        res.status(201).json({ message: 'Hello Admin, User Admin created successfully', admin: newAdmin });
    } else {
        // Apenas usuários administradores 
        throw new Error('Unauthorized');
    }       
};

module.exports = {
    register,
    adminAddUser,
    adminEditUser,
    adminDeletUser,
    adminAddAdmin
};
