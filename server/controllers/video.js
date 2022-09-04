import Video from '../model/Video.js'
import User from '../model/User.js'
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

export const addView = async (req, res, next) => {
    await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } })
    try {
        res.status(200).json('the view has been increased')
    } catch (err) {
        next(err)
    }
}

//Get Randome Videos : aggregate
export const random = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
};

// Note:
// to return trend videos set "views" => -1
// to return last view videos set "views" => 1

export const trend = async (req, res, next) => {
    const videos = await Video.find().sort({ views: -1 })
    try {
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}

export const sub = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const subscribedChannels = user.subscribedUsers;
 
        const list = await Promise.all(
            subscribedChannels.map(async (channelId) => {
                return await Video.find({ userId: channelId });
            })
        );
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
    } catch (err) {
        next(err)
    }
}


export const GetByTag = async (req, res, next) => {
    const tags=req.query.tags.split(',')
    console.log(tags);
    try {
        const videos = await Video.find({tags:{$in:tags}}).limit(20)
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}


export const search = async (req, res, next) => {
    const query = req.query.q
    try {
        const videos = await Video.find({title:{$regex:query,$options:'i'}}).limit(40)
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}
