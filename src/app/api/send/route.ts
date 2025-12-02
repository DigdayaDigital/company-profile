import { NextRequest } from 'next/server';
import { EmailTemplate } from '../../../components/email/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      phone, 
      message 
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'Digdaya Digital <hello@digdayadigital.com>',
      to: ['digdayadigitalid@gmail.com'],
      subject: `New Message from ${name}`,
      react: EmailTemplate({ 
        name: name, 
        email: email, 
        phone: phone, 
        message: message
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}