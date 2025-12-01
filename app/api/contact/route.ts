import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, email, phone } = await request.json();

    const data = await resend.emails.send({
      from: 'Vital Enterprises <onboarding@resend.dev>', // Update this if you have a verified domain
      to: ['pbrown@vital-enterprises.com'],
      subject: `New Lead: ${company} - ${name}`,
      html: `
        <h1>New Lead from Vital Enterprises Landing Page</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
