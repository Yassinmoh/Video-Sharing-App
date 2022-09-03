import express from 'express';
import { updateUser,deleteUser,getUser,subscribe,unSubscribe,like,disLike } from '../controllers/user.js';
import {verifyToken} from '../VerifyToken.js'
const routes=express.Router();

// UPDATE USER:
routes.put('/:id',verifyToken,updateUser)

//DELETE USER:
routes.delete('/:id',verifyToken,deleteUser)

//GET USER:
routes.get('/find/:id',getUser)


//SUBSCRIBE USER:
routes.put('/sub/:id',verifyToken,subscribe)


//UNSUBSCRIBE USER:
routes.put('/unsub/:id',verifyToken,unSubscribe)


//LIKE VIDEO:
routes.put('/like/:videoId',verifyToken,like)


//DISLIKE VIDEO:
routes.put('/dislike/:videoId',verifyToken,disLike)




export default routes