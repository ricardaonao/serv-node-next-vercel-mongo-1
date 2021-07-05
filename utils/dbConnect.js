
import mongoose  from "mongoose";


const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connection[0].readyState;
    console.log(connection.isConnected);

}

export default dbConnect;


