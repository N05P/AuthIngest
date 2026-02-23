import {Inngest} from 'inngest'

export const inngest = new Inngest({
    id: 'practice_project',
    ai: {gemini:{apiKey: process.env["GEMINI _API_KEY "]}}
})