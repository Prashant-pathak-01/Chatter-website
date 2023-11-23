import mongoose from "mongoose";
const Message = mongoose.Schema({
    senderId:{
        type:String
    },recieverId:{
        type:String
    },conversationId:{
        type:String
    },text:{
        type:String
    },type:{
        type:String
    }
},{
    timestamps:true
});
const messageSchema =  mongoose.model('message',Message);
export default messageSchema;