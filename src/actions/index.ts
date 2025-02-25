import { defineAction } from "astro:actions";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
         accept: "form",
         imput:z.object({
             name: z.string().name(),
             email: z.string().email(),
             telefono: z.string().telefono(),
             asistentes: z.string().asistentes(),
             mensaje: z.string().mensaje(),
            }),
         handler: async ({name, email, telefono, asistentes, mensaje}) => {
            const {data, error} = await resend.emails.send({
                "from": "Boda Nuria y Cristian <onboarding@resend.dev>",
                "to": ["cristian.s.arana@gmail.com"],
                "subject": "Nueva Confirmación",
                name,
                email,
                telefono,
                asistentes,
                mensaje,
                "html": "<strong>Nueva Confirmación!</strong>",
            });

    if error {
        throw error;
         }
    return data;
    })
}