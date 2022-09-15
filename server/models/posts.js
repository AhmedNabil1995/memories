import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    creator: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String]},
},{timestamps:true})

let posts = mongoose.model('Post',schema);

export default posts;