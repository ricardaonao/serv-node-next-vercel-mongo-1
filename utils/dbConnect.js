

import mongoose  from "mongoose";


const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect('mongodb+srv://APIs_teste:538260@cluster0.p414s.mongodb.net/APIs_teste?retryWrites=true&w=majority', {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connection[0].readyState;
    console.log(connection.isConnected);

}

export default dbConnect;


