import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
    // send an email
    const {data, error} = await resend.emails.send({
        "from": "Boda Nuria y Cristian <onboarding@resend.dev>",
        "to": ["cristian.s.arana@gmail.com"],
        "subject": "Nueva Confirmación",
        "html": "<strong>Nueva Confirmación!</strong>",
    });

    if (error) {
        return new Response(JSON.stringify({error}));
    }

    return new Response(JSON.stringify({data})); 

};