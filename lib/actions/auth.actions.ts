'use server'

import {auth} from '@/lib/better-auth/auth'
import {headers} from "next/headers";
import {inngest} from "@/lib/inngest/client";

export const SignUp = async({email,password,fullName}:SignUpFormData)=>{
try{
    const response = await auth.api.signUpEmail({body:{email,password, name:fullName}})

    if(response){
        inngest.send({
            name:'app/user.created',
            data:{email,name:fullName}
        })
    }
    return {success:true,data:response}
}
catch(err){
    console.log(err);
    return {success:false,err:"Something went wrong"};
}
}

export const SignIn = async({email,password}:SignInFormData)=>{
    try{
        const response = await auth.api.signInEmail({body:{email,password}})
        return {success:true,data:response}
    }
    catch(err){
        console.log(err);
        return {success:false,err:"Something went wrong"};
    }
}

export const SignOut = async()=>{
    try{
        await auth.api.signOut({headers: await headers()})
        return {success:true}
    }
    catch(err){
        console.log(err)
        return {success:false,err:"Something went wrong"};
    }
}