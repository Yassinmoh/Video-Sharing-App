import { createError } from '../error.js'
import User from '../model/User.js'

export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, {
                new: true
            })
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, 'Sory you allowed to update only your account'));
    }
}


export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json(`the user has been deleted`)
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, 'Sory you allowed to delete only your account'));
    }
}

export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)
    try{
        if(!user) return next(createError(404, 'User not found'));
        res.status(200).json(user)
    }catch (err) {
        next(err)
    }
}

export const subscribe =async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1}
        })
        res.status(200).json('Subscribed users success')
    } catch (err) {
        next(err);
    }
}
export const unSubscribe =async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1}
        })
        res.status(200).json('Unsubscribed users success')
    } catch (err) {
        next(err);
    }
}

export const like = (req, res, next) => { }
export const disLike = (req, res, next) => { }