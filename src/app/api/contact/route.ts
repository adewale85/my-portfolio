import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "adewale@example.com";

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set in environment variables.");
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please add RESEND_API_KEY to your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
          <h2 style="color: #4f46e5; margin-bottom: 16px;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; white-space: pre-wrap; color: #1e293b;">
            ${message}
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal Server Error";
    console.error("Contact API error:", err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

