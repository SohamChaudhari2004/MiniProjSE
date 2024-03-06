import express from 'express';
import { register,login,getAllUser } from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.post('/register', register);
userRoutes.post('/login', login);
userRoutes.get('/all', getAllUser);


export default userRoutes;