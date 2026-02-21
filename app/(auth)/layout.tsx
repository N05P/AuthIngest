import React from 'react'
import {auth} from '@/lib/better-auth/auth'
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import Header from "@/components/Header";

const Layout = async({children}:{children:React.ReactNode}) => {

const session = await auth.api.getSession({headers: await headers()});

if(session?.user) redirect('/')
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}
export default Layout
