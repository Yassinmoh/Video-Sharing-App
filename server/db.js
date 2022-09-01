import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    throw err;
})

