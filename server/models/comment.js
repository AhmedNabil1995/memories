import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    creator: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    post: {type:mongoose.Schema.Types.ObjectId,ref:'Post'},
    comment: { type: String},
},{timestamps:true})

let CommentModel = mongoose.model('Comment',schema);

export default CommentModel;