import express from 'express'
import mongoose from 'mongoose';
import CommentModel from '../models/comment.js';

const router = express.Router();

router.post('/',async(req,res)=>{
    try {
        let {post,creator,comment} = req.body;
        let newCommnet =  new CommentModel({post,creator,comment});
        let savedComment = await (await newCommnet.save()).populate('creator');
        console.log(req.body)
        res.status(200).json(savedComment);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:postId',async(req,res)=>{
    try {
        let comments = await CommentModel.find({post:(req.params.postId)}).populate('creator').sort({createdAt:-1});
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:commentId',async(req,res)=>{
    try {
        let deletedComment = await CommentModel.findByIdAndDelete(req.params.commentId);
        res.status(200).json(deletedComment);
    } catch (err) {
        res.status(500).json(err)
    }
})

export default router;