import type { APIRoute } from "astro";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
    // send an email
    const {data, error} = await resend.emails.send({
        "from": "Boda Nuria y Cristian <onboarding@resend.dev>",
        "to": ["delivered@resend.dev"],
        "subject": "hello world",
        "html": "<strong>it works!</strong>",
    });

    if (error) {
        return new Response(JSON.stringify({error}));
    }

    return new Response(JSON.stringify({ data})); 

};