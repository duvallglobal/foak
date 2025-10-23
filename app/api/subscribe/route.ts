import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body || {};

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Subscription service not configured. Please contact us directly at info@findsofallkinds.store' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Newsletter <subscribe@findsofallkinds.store>',
      to: ['info@findsofallkinds.store'],
      subject: 'New newsletter subscriber',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">New Newsletter Subscriber</h2>
            <p style="margin: 10px 0;">Email: <a href="mailto:${email}" style="color: #00d4ff;">${email}</a></p>
            <p style="font-size: 12px; color: #666;">Subscribed at ${new Date().toLocaleString()} from the homepage.</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 500 }
      );
    }

    console.log('Newsletter subscription recorded:', {
      email,
      emailId: data?.id,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully.' }, { status: 200 });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}