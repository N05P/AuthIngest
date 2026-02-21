import mongoose from "mongoose";
import {mongodbAdapter} from "better-auth/adapters/mongodb";

type MongoCache = {
    conn: typeof mongoose | null;
    promise : Promise<typeof mongoose> | null;
}

declare global{
    var mongoose : MongoCache | undefined;
}

let cache: MongoCache = global.mongoose || {conn:null,promise:null}

if(!global.mongoose){
    global.mongoose = cache;
}

const MongoUri = process.env.MONGODB_URI;

async function connectDB():Promise<typeof mongoose>{
    if(cache.conn) return cache.conn;

    if(!cache.promise) {
        if(!MongoUri){
            throw new Error("MongoUri was not found");
        }

        const option = {
            bufferCommands:true,
        }

        cache.promise = mongoose.connect(MongoUri, option)
            .then((mongoose)=>{
                return mongoose;
            })
    }
    try{
        cache.conn = await cache.promise;
    }
    catch(err){
        cache.promise = null;
        throw err;
    }
    return cache.conn;
}

export default connectDB;
