import ConversationSchema from "../schema/conversationSchema.js";
export const addConversation = async(request,response)=>{
    try{
        let sender = request.body.senderId;
        let reciever = request.body.recieverId;
        const exists = await ConversationSchema.findOne({member: { $all:[sender,reciever]}});
        if(exists){
            return response.status(200).json('Conversation already exists');
        }
        const newConversation = new ConversationSchema({
            member:[sender,reciever]
        })
        await newConversation.save();
        return response.status(200).json('New conversation created');
    } catch(error){
        return response.status(500).json(error.message);
    }
}

export const getConversation = async(request,response)=>{
    try{
        let sender = request.body.senderId;
        let reciever = request.body.recieverId;
        const conversation = await ConversationSchema.findOne({member: { $all:[sender,reciever]}});
        return response.status(200).json(conversation);
    } catch(error){
        return response.status(500).json(error.message);
    }
}