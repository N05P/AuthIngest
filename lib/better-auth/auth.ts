import {betterAuth} from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import connectDB from "@/database/mongodb";
import {nextCookies} from "better-auth/next-js";

let authInstance:ReturnType<typeof betterAuth> | null = null;

const getAuth = async()=>{
    if(authInstance) return authInstance;

    const mongoose = await connectDB();
    const db = mongoose.connection.db;

    if(!db) throw new Error("MongoDB connection failed");

    authInstance = betterAuth({
        database:mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_BASE_URL,
        emailAndPassword:{
            autoSignIn:true,
            disableSignUp:false,
            requireEmailVerification:false,
            enabled:true,
            minPasswordLength:8,
            maxPasswordLength:128,
        },
        plugins:[nextCookies()]
    })
    return authInstance;
}

export const auth = await getAuth();