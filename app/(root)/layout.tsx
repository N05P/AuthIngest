import React, {ReactNode} from 'react'
import Header from "@/components/Header";
import {auth} from '@/lib/better-auth/auth'
import {headers} from "next/headers";
import {redirect} from "next/navigation";

const Layout = async({children,}:Readonly<{children:React.ReactNode}>) => {

    const session = await auth.api.getSession({headers: await headers()});

    if(!session) redirect('/sign-up')
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            {children}
        </div>
    )
}
export default Layout
