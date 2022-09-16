import posts from '../models/posts.js'
import mongoose from 'mongoose'
import UserModel from '../models/user.js';


export const getownPosts = async (req,res)=>{
    try{
    let data = await posts.find({creator:req.params.id}).populate('creator').sort({createdAt:-1});
    res.status(200).json(data);
    }catch(eror){
        res.status(404).json({message:eror.message})
    }
}

export const timeLinePost = async (req,res)=>{
    try{
    let myPosts = await posts.find({creator:req.user.id}).populate('creator');
    let me = await UserModel.findById((req.user.id).toString());
    let friendsPosts = await Promise.all(
        me.followings.map((id)=>{
           return posts.find({creator:id}).populate('creator');
        })
    )
    friendsPosts.push(myPosts);
    let timeline = friendsPosts.flat().sort((x,y)=>{
        return y.createdAt - x.createdAt
    })
    res.status(200).json(timeline);
    }catch(eror){
        res.status(404).json({message:eror.message})
    }
}


export const getPost = async (req,res)=>{
    let {id} = req.params 
    try{
    let data = await posts.findById(id).populate('creator');
    res.status(200).json(data)
    }catch(eror){
        res.status(404).json({message:eror.message})
    }
}

export const createPost = async (req,res)=>{
    let data = req.body;

    try{

        let post =  new posts(data);
        let newPost =  await (await post.save()).populate('creator');
        res.status(200).json(newPost)
    }catch(eror){
        res.status(404).json({message:eror.message})
    }
}


export const updatePost = async (req,res)=>{
    let {id} = req.params;
    let {creator,title,message,tags,selectedFile} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    try {
        let newdata = await posts.findByIdAndUpdate(id,{
            creator,title,message,tags,selectedFile
        },{new:true}).populate('creator');
           res.status(200).json(newdata)
    }catch(error) {
        res.status(404).json({message:error.message})
    }
}


export const deletePost = async (req,res)=>{
    let {id} = req.params;
      try {
        let deletedPost =await posts.findByIdAndDelete(id);
      res.status(200).json(deletedPost)
      } catch (error) {
        res.status(404).json({message:error.message})
      }
    
}

export const likePost = async(req,res)=>{
    let {id} = req.params
    let userId = req.user.id;
    try {
        let post = await posts.findById(id);
        if(post.likes.includes(userId)){
            post.likes.pop(userId);
        }else{
            post.likes.push(userId);
        }
        await post.save();
        res.status(200).json('liked post')
        
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}
