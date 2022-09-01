import jwt from 'jsonwebtoken'
import {createError} from './error.js'

export const verifyToken=(req,res,next)=>{
    const token =req.cookies.access-token
    if(!token){
        return next(createError(401,'You are not Authenticated'))
    }
    jwt.verify(token,process.env.JWT_SECRIT_KEY,(err,user)=>{
        if(err) return next(createError(403,'Invalid Token'))
    })
    req.user = user
    next()
} 
