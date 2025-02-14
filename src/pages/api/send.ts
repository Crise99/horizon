import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const post: APIRoute = async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const asistentes = formData.get("asistentes");
    const message = formData.get("message");

    const {data, error} = await resend.emails.send({
        "from": "Boda Nuria y Cristian <onboarding@resend.dev>",
        "to": ["cristian.s.arana@gmail.com"],
        "subject": "Nueva Confirmación",
        "html": `
            <strong>Nueva confirmación!</strong>
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Número de asistentes: ${asistentes}</p>
            <p>Mensaje: ${message}</p>
        `,
    });

    if (error) {
        return new Response(JSON.stringify({error}), {
            headers: { "Content-Type": "application/json" }
        });
    }

    return new Response(JSON.stringify({data}), {
        headers: { "Content-Type": "application/json" }
    }); 
};