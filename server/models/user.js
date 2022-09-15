import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    name:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    followings:{type:[mongoose.Schema.Types.ObjectId],default:[],ref:'User'},
},{timestamps:true})

let UserModel = mongoose.model('User',schema);

export default UserModel;