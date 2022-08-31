import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
mongoose.connect(process.env.MONGO,()=>{
    console.log('Connected to database');
})

