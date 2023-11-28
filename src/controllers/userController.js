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
    
        // Cria um novo usuário
        const user = new User({ name, email, password, role });
        console.log('User antes:', user);
        await user.save();
        console.log('Usuário após o salvamento no Mongoose:', user);
        res.json({ success: true, message: 'User created successfully' });

};
const edit = async (req, res) => {
        const userEmail = req.params.email;
        const updatedUserData = req.body;

        // Verifica se o usuário autenticado é o mesmo que está sendo editado
        if (req.user.email !== userEmail) {
            return res.status(403).json({ error: 'Permission denied. You can only edit your own profile.' });
        }

        // Verifica se o usuário a ser editado existe
        const userToUpdate = await User.findOne({ email: userEmail });
        if (!userToUpdate) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Atualiza os dados do usuário
        userToUpdate.name = updatedUserData.name || userToUpdate.name;
        userToUpdate.email = updatedUserData.email || userToUpdate.email;
        userToUpdate.password = updatedUserData.password || userToUpdate.password;
                
        // Salva as alterações no banco de dados
        await userToUpdate.save();

        res.status(200).json({ message: 'Hello User, User updated successfully', user: userToUpdate });
};

const adminAddUser = async (req, res) => {
            const { name, email, password, role } = req.body;

            // Verifica se o e-mail já está em uso
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already in use' });
            }

            // Cria um novo usuário
            const user = new User({ name, email, password, role });
            await user.save();
            res.json({ success: true, message: 'Hello Admin, User created successfully' });
};

const adminEditUser = async (req, res) => {
        const userEmail = req.params.email;
        const updatedUserData = req.body;

        // Verifica se o usuário a ser editado existe
        const userToUpdate = await User.findOne({ email: userEmail });
        if (!userToUpdate) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Atualiza os dados do usuário
        userToUpdate.name = updatedUserData.name || userToUpdate.name;
        userToUpdate.email = updatedUserData.email || userToUpdate.email;
        userToUpdate.password = updatedUserData.password || userToUpdate.password;
                
        // Salva as alterações no banco de dados
        await userToUpdate.save();

        res.status(200).json({ message: 'Hello Admin, User updated successfully', user: userToUpdate });      
};

const adminDeletUser = async (req, res) => {
        const userEmail = req.params.email;

        // Verifica se o usuário a ser excluído existe
        const userToDelete = await User.findOne({ email: userEmail });
        if (!userToDelete) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Remove o usuário do banco de dados
        await userToDelete.deleteOne();

        res.json({ success: true, message: 'Hello Admin, User deleted successfully' });  
};

const adminAddAdmin = async (req, res) => {
        const newAdminData = req.body;

        // Cria um novo usuário com a função de administrador
        const newAdmin = await User.create({
            name: newAdminData.name,
            password: newAdminData.password,
            email: newAdminData.email,
            role: 'admin',
        });

        res.status(201).json({ message: 'Hello Admin, User Admin created successfully', admin: newAdmin });     
};

module.exports = {
    register,
    edit,
    adminAddUser,
    adminEditUser,
    adminDeletUser,
    adminAddAdmin
};
