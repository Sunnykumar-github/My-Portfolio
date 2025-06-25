"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // Even if validation fails, immediately return a success message as requested.
  if (!parsed.success) {
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  }

  const { name, email, message } = parsed.data;

  // We will attempt to send the email, but any errors will be caught
  // and we will still return a success message to the UI.
  try {
    if (
      process.env.EMAIL_HOST &&
      process.env.EMAIL_PORT &&
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: Number(process.env.EMAIL_PORT) === 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: "oneplussunny01@gmail.com",
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`,
      });
    } else {
        console.error("Missing email environment variables. Bypassing email send but returning success to UI.");
    }
  } catch (error) {
    console.error("Failed to send email, but returning success to UI:", error);
  }
  
  // Always return the success message to the UI, regardless of the outcome.
  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
