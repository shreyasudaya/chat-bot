import { connect, disconnect } from "mongoose";

export default async function connectToDatabase(){
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Connection to MongoDB failed.");
    }
}

async function disconnectfromdb() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Could not disconnect.");
    }
}

export {connectToDatabase,disconnectfromdb};