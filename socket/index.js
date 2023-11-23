import { Server } from "socket.io";
const io = new Server(9000,{
    cors:{
        origin:'http://localhost:3000'
    }
})

let users = [];

const addUser = (userData,socketId)=>{
    !users.some(user=>user.sub==userData.sub) && (users.push({ ...userData,socketId}));
}

const getUser = (userId)=>{
    return users.find(user=> user.sub === userId);
}

io.on('connection',(socket)=>{
    console.log("Socket connected");
    socket.on("addUsers",userData=>{
        addUser(userData,socket.io);
        io.emit('getUsers',users);
    })
    socket.on("sendMessage",data=>{
        const user = getUser(data.recieverId);
        io.to(user.socketId).emit('geMessage',data);
    })


});