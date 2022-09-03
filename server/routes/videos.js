import express from 'express';
import {addVideo,updateVideo,deleteVideo,getVideo } from '../controllers/video.js';
import {verifyToken} from '../VerifyToken.js'

const routes=express.Router();

routes.post('/',verifyToken,addVideo)
routes.put('/:id',verifyToken,updateVideo)
routes.delete('/:id',verifyToken,deleteVideo)
routes.get('/find/:id',getVideo)
routes.put('/view/:id',getVideo)
routes.get('/trend',getVideo)
routes.get('/random',getVideo)
routes.get('/sub',getVideo)

export default routes