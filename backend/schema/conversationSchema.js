import mongoose from "mongoose";
const conversation = new mongoose.Schema({
    member:{
        type:Array
    },
    message:{
        type:String
    }
},{
    timestamps:true
})

const conversationSchema = mongoose.model('conversation',conversation);
export default conversationSchema;