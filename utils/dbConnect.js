
import mongoose  from "mongoose";


const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    //cada mudança de estado emite seu nome do evento. 0=disconnected, 1=connected, 2= connecting, 3=disconnecting. isso é opcional
    connection.isConnected = db.connection.readyState;
    console.log(connection.isConnected);

}

export default dbConnect;


