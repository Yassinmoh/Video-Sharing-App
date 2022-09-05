import express from 'express';
import { signup,signin,googleAuth} from '../controllers/auth.js';
const routes=express.Router();

//  CREATE NEW USER
routes.post('/signup',signup)

//SIGN IN
routes.post('/signin',signin)

//GOOGLE AUTH
routes.post('/google',googleAuth)

export default routes