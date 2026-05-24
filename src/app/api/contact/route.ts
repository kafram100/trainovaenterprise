import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, institution, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `New Contact Message from ${name}`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
        ${phone ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>` : ""}
        ${institution ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd;">Institution</td><td style="padding:8px;border:1px solid #ddd;">${institution}</td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd;vertical-align:top;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message.replace(/\n/g, "<br>")}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || email,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
