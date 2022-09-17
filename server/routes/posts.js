import express from 'express';
import {getownPosts,getPost,createPost,updatePost, deletePost, likePost, timeLinePost, getPosts} from '../controls/posts.js'
import { verify } from '../middleware/verify.js';

let router = express.Router();

router.get('/',verify,getPosts);

router.get('/profile/:id',verify,getownPosts);

router.get('/timeline',verify,timeLinePost);


router.get('/:id',verify,getPost)

router.post('/',verify,createPost)

router.patch('/:id',verify,updatePost)

router.patch('/like/:id',verify,likePost)



router.delete('/:id',verify,deletePost)



export default router;