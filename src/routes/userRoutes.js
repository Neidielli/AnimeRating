const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const adminServices = require('../services/adminService');
const authServices = require('../services/authMiddleware');

// usuario se cadastra
router.post('/register', userController.register);
// admin cadastra usuario
router.post('/admin/register', authServices.authenticateMiddleware, adminServices.authorizeAdminMiddleware, userController.adminAddUser);
// atualiza usuário 
router.put('/admin/:email', authServices.authenticateMiddleware, adminServices.authorizeAdminMiddleware, userController.adminEditUser);
// excluir usuário
router.delete('/admin/:email', authServices.authenticateMiddleware, adminServices.authorizeAdminMiddleware, userController.adminDeletUser);
// admin cadastra admin
router.post('/admin/registerAdmin', authServices.authenticateMiddleware, adminServices.authorizeAdminMiddleware, userController.adminAddAdmin);


module.exports = router;
