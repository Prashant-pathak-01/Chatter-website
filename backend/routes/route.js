import express from 'express';
import { addUser,getUser } from '../controller/user-controller.js';
import { addConversation } from '../controller/conversation-controller.js';
import { getConversation } from '../controller/conversation-controller.js';
import { addMessage,getMessage } from '../controller/message-controller.js';
const route  = express.Router();
route.post('/addUser', addUser);
route.get('/getUser', getUser);
route.post('/conversation/add',addConversation);
route.post('/conversation/get', getConversation);
route.post('/messages/add',addMessage);
route.get('/messages/get/:id',getMessage);
// File Upload works................
export default route;