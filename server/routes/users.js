import express from 'express';
import { update,deleteUser,getUser,subscribe,unSubscribe,like,disLike } from '../controllers/user.js';
import {verifyToken} from '../VerifyToken.js'
const routes=express.Router();

// UPDATE USER:
routes.put('/:id',verifyToken,update)

//DELETE USER:
routes.delete('/:id',verifyToken,deleteUser)

//GET USER:
routes.get('/find/:id',verifyToken,getUser)


//SUBSCRIBE USER:
routes.put('/sub/:id',verifyToken,subscribe)


//UNSUBSCRIBE USER:
routes.put('/unsub/:id',unSubscribe)


//LIKE VIDEO:
routes.put('/like/:videoId',like)


//DISLIKE VIDEO:
routes.put('/dislike/:videoId',disLike)




export default routes