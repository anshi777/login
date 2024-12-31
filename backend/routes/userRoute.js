import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);
router.get('/getAllUsers', userController.getAllUsers);

export default router;
