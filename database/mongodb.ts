import mongoose from "mongoose";

type MongoCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

declare global {
    var mongoose: MongoCache | undefined;
}

let cache: MongoCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
    global.mongoose = cache;
}

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB(): Promise<typeof mongoose> {
    if (cache.conn) return cache.conn;

    if (!cache.promise) {
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in environment variables");
        }

        cache.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
    }

    try {
        cache.conn = await cache.promise;
    } catch (err) {
        cache.promise = null;
        throw err;
    }

    return cache.conn;
}

export default connectDB;