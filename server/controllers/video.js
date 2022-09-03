import Video from '../model/Video.js'
import { createError } from '../error.js'


export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    } catch (err) {
        next(err)
    }
}
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Video not found"))
        if (req.user.id === video.userId) {
            const updatedVideo = await video.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedVideo)
        } else {
            if (!video) return next(createError(403, "you onle can apdate your video"))
        }
    } catch (err) {
        next(err)
    }
}

export const deleteVideo = async (req, res, next) => {
    const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Video not found"))
        if (req.user.id === video.userId) {
            await video.findByIdAndDelete(req.params.id)
            res.status(200).json("the video has been deleted successfuly")
        } else {
            if (!video) return next(createError(403, "you onle can Delete your video"))
        }
}

export const getVideo = async (req, res, next) => {
    const video = await Video.findById(req.params.id)
    try {
        if (!video) return next(createError(404, "Video not found"))
        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}