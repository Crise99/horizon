import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "zod"; // Agregado

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      telefono: z.string(), // Puedes usar regex para validarlo
      asistentes: z.string(),
      mensaje: z.string(),
    }),
    handler: async ({ name, email, telefono, asistentes, mensaje }) => {
      const { data, error } = await resend.emails.send({
        from: "Boda Nuria y Cristian <onboarding@resend.dev>",
        to: ["cristian.s.arana@gmail.com"],
        subject: "Nueva Confirmación",
        html: `<strong>Nueva Confirmación!</strong><br>
               <p><strong>Nombre:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Teléfono:</strong> ${telefono}</p>
               <p><strong>Asistentes:</strong> ${asistentes}</p>
               <p><strong>Mensaje:</strong> ${mensaje}</p>`,
      });

      if (error) {
        throw error;
      }
      return data;
    },
  }),
};
