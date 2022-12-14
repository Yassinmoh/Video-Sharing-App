import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User.js'
import { createError } from '../error.js'



export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const NewUser = new User({ ...req.body, password: hash })
        await NewUser.save()
        res.status(200).json(NewUser)
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name })
        if (!user) return next(createError(404, `User with name ${req.body.name} Not Found`))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) return next(createError(400, `Wrong name or password`))
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRIT_KEY)
        //hide password from response
        const { password, ...other } = user._doc
        res.cookie("access_token", token).status(200).json(other)
    } catch (err) {
        next(err)
    }
}

export const googleAuth = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT);
            res
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .status(200)
                .json(user._doc);
        } else {
            const newUser = new User({
                ...req.body,
                fromGoogle: true,
            });
            const savedUser = await newUser.save();
            const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
            res
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .status(200)
                .json(savedUser._doc);
        }
    } catch (err) {
        next(err);
    }
};
