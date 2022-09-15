import express from 'express';
import {follow, getUser, unfollow} from '../controls/user.js'
import { verify } from '../middleware/verify.js';

let router = express.Router();


router.get('/:id',getUser)

router.put('/follow/:id',verify,follow);

router.put('/unfollow/:id',verify,unfollow);



export default router;