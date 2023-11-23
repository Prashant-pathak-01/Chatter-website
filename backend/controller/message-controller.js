import Message from '../schema/messageSchema.js';
import conversationSchema from '../schema/conversationSchema.js';
export const addMessage=async(req,res)=>{
    try{
        const message = new Message(req.body);
        await message.save();
        await conversationSchema.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
        return res.status(200).json("Message saved successfully !");
    }catch(error){
        return res.status(500).json(error.message+"message Adding error");
    }
}

export const getMessage=async(req,res)=>{
    try{
        const messages = await Message.find({conversationId: req.params.id});
        return res.status(200).json(messages);
    }catch(error){
        return res.status(500).json(error.message+"message getting error");
    }
}