import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

export const getUser= async(req,res)=>{
    let {id} = req.params;

    try {
        let user = await UserModel.findById(id);

        let {password,...other} = user._docs;
    
        res.status(200).json(other)
        
    } catch (err) {
        res.status(500).json(err);
    }

}

export const follow = async (req,res)=>{
    let {id} = req.params;
    try {
        let updatedUser = await UserModel.findByIdAndUpdate((req.user.id),{
            $push:{followings:(id)}
        },{new:true});
        let token = jwt.sign({id:updatedUser._id},'secretKey');
        let {password,...other} = updatedUser._doc;
        res.status(200).json({...other,token});
        
    } catch (err) {
        res.status(500).json(err);
    }
}

export const unfollow = async (req,res)=>{
    let {id} = req.params;
    console.log(new mongoose.Types.ObjectId(id))
    try {
        let updatedUser = await UserModel.findByIdAndUpdate((req.user.id),{
            $pull:{followings:(id)}
        },{new:true});
        let token = jwt.sign({id:updatedUser._id},'secretKey');
        let {password,...other} = updatedUser._doc;
        res.status(200).json({...other,token});
        
    } catch (err) {
        res.status(500).json(err);
    }
}