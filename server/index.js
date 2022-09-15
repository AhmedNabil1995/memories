import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import commentRouter from './routes/comment.js';
import cookie from 'cookie-parser';

let connection_url = 'mongodb+srv://ahmed:1234@cluster0.8k5fy.mongodb.net/?retryWrites=true&w=majority'
let PORT = 5000;

const app = express();

app.use(cors());
app.use(cookie());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use('/auth',authRouter);
app.use('/posts',postRouter);
app.use('/users',userRouter);
app.use('/comments',commentRouter);


mongoose.connect(connection_url).then(()=>{
    app.listen(PORT,()=>console.log(`server is listnenig on port ${PORT}`));
}).catch((err)=>console.log(err))
