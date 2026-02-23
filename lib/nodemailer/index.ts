import nodemailer from 'nodemailer';
import {LOGIN_THANK_YOU_EMAIL_TEMPLATE} from "@/lib/nodemailer/template";

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    }
})

export const sendWelcomeEmail = async ({email,name,intro}:{email:string,name:string,intro:string}) => {
    const htmlTemplate =  LOGIN_THANK_YOU_EMAIL_TEMPLATE(name,intro)

    const option = {
        from: `"AuthInngest" <authinngest@jsmastery.pro>`,
        to:email,
        subject:'Welcome to AuthInngest - simple project to practice my learning',
        text:'Thanks for joining the AuthInngest',
        html:htmlTemplate
    }
    await transport.sendMail(option);
}

