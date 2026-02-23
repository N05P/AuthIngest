export const SIMPLE_WELCOME_EMAIL_PROMPT = `
Write a short, friendly HTML message to thank the user for signing up.

User info:
{{user}}

Requirements:
- Mention the user's first name
- Make the tone warm and friendly
- Make them feel happy to get started
- Keep it natural and conversational

Rules:
- Return ONLY HTML
- Use one paragraph
- Keep it under 40 words

Format:

<p>Your message here</p>
`;