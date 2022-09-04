import express from 'express';
import { addComment,delateComment,getComments } from '../controllers/comment.js';
import {verifyToken} from '../VerifyToken.js'
const routes=express.Router();




routes.post('/',verifyToken,addComment);
routes.delete('/:id',verifyToken,delateComment);
routes.get('/:videoId',getComments);

export default routes