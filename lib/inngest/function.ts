import { inngest } from "@/lib/inngest/client";
import { sendWelcomeEmail } from "@/lib/nodemailer";
import { SIMPLE_WELCOME_EMAIL_PROMPT } from "@/lib/inngest/prompt";

export const sendSignUpEmail = inngest.createFunction(
    { id: "sign-up-email" },
    { event: "app/user.created" },
    async ({ event, step }) => {

        console.log("FUNCTION TRIGGERED");
        console.log(event.data);

        const userProfile = `- Email: ${event.data.email}`;

        const prompt = SIMPLE_WELCOME_EMAIL_PROMPT.replace('{{user}}', userProfile);

        const response = await step.ai.infer("generate-welcome-intro", {
            model: step.ai.models.gemini({ model: "gemini-2.5-flash" }),
            body: {
                contents: [
                    {
                        role: "user",
                        parts: [{ text: prompt }],
                    },
                ],
            },
        });

        const introText =
            response?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Thanks for signing up with us!";

        await step.run("send-welcome-email", async () => {
            const { email, name } = event.data;

            return await sendWelcomeEmail({
                email,
                name,
                intro: introText,
            });
        });

        return { success: true };
    }
);