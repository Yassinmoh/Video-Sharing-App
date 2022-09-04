import { createError } from '../error.js'
import Comment from '../model/Comment.js'
import Video from '../model/Video.js'



export const addComment = async (req, res, next) => {
    try {
        const newComment = new Comment({ ...req.body, userId: req.user.id })
        const savedVideo = await newComment.save()
        res.status(200).json(savedVideo)
    } catch (err) {
        next(err)
    }
}



export const delateComment = async (req, res, next) => {
    try {
        const comment = Comment.findById(req.params.id)
        const video = Video.findById(req.params.id)
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            await Comment.findOneAndDelete(req.params.id)
            res.status(200).json('Successfully deleted comment')
        } else {
            return next(createError(403, 'you only can delete your comment'))
        }
    } catch (err) {
        next(err)
    }
}



export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({videoId:req.params.videoId})
        // if(!comments) return next(createError(404,'comment not found'))
        res.status(200).json(comments)
    } catch (err) {
        next(err)
    }
}



