import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const connection = async() => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-swvdwcc-shard-00-00.4nynmrw.mongodb.net:27017,ac-swvdwcc-shard-00-01.4nynmrw.mongodb.net:27017,ac-swvdwcc-shard-00-02.4nynmrw.mongodb.net:27017/?ssl=true&replicaSet=atlas-5fcbii-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true });
        console.log("Connected"); 
    } catch(error){
        console.log("Connection error"+error.message);
    }
}

export default connection;