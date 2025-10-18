import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters.' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be less than 1000 characters.' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at info@findsofallkinds.store' },
        { status: 500 }
      );
    }

    try {
      // Initialize Resend with API key
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      // Send email via Resend
      const { data, error: resendError } = await resend.emails.send({
        from: 'Contact Form <contact@findsofallkinds.store>',
        to: ['info@findsofallkinds.store'],
        replyTo: email,
        subject: `Contact Form: ${subject || 'New Message from ' + name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 5px;">Contact Details:</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #00d4ff;">${email}</a></p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #00d4ff;">
                  <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="font-size: 12px; color: #666; margin: 0;">
                  This message was sent from the Finds of all Kinds - South contact form at ${new Date().toLocaleString()}.
                </p>
              </div>
            </div>
          </div>
        `,
      });

      if (resendError) {
        console.error('Resend error:', resendError);
        return NextResponse.json(
          { error: 'Failed to send email. Please try again or contact us directly.' },
          { status: 500 }
        );
      }

      // Log successful submission (optional)
      console.log('Contact form email sent successfully:', {
        emailId: data?.id,
        from: email,
        name: name,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { 
          success: true,
          message: 'Thank you for your message! We\'ll get back to you as soon as possible.' 
        },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try contacting us directly at info@findsofallkinds.store' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}