import('./db.js')
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRouter from './routes/users.js'
import videoRouter from './routes/videos.js'
import commentRouter from './routes/comments.js'
import authRouter from './routes/auth.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000



app.use(cookieParser())
app.use(express.json())
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/videos', videoRouter)
app.use('/comments', commentRouter)


//ERROR HANDLER:
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})





