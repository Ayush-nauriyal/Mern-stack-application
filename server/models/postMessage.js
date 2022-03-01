import mongoose from "mongoose";
//creating a mongoose schema
const postSchema =mongoose.Schema({
   title :String,
   message :String,
   creator :String,
   tags:[String],
   selectedFile: String,
   likeCount: {
       type:Number,
       default:0
   },
   createdAt:{
       type: Date,
       default: new Date()
   },
});
//creating a monggose model for the mongoose schema

const PostMessage = mongoose.model('PostMessage',postSchema);

//exporting the mongoose model

export default PostMessage;