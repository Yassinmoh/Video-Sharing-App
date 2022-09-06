import mongoose from 'mongoose';

const videoSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String},
    imgUrl:{type:String},
    videoUrl:{type:String},
    views:{type:Number,default:0},
    tags:{type:[String],default:[]},
    likes:{type:[String],default:[]},
    dislikes:{type:[String],default:[]},
},{timestamps:true})

export default mongoose.model("Video",videoSchema)