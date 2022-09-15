import express from 'express';
import UserModel from '../models/user.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// register
router.post('/register',async(req,res)=>{
    const {password,name} = req.body;
    try {
        let oldUser = await UserModel.findOne({name});
        if(oldUser){return res.status(400).json('this user is found')};
        let user = new UserModel({name,password});
        let newUser = await user.save();
        console.log('aaaaa');
        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).json(err);
    }
})

// login
router.post('/login',async(req,res)=>{
    const {password,name} = req.body;
    try {
        let oldUser = await UserModel.findOne({name});
        if(!oldUser){return res.status(400).json('this user does not exist')};
        if(oldUser.password === password){
            let token = jwt.sign({id:oldUser._id},'secretKey');
            res.status(200).json({...oldUser._doc,token});
        }else{
            res.status(400).json('password is wrong')
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

export default router;