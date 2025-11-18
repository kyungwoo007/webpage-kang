import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {name, email, subject, message} = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {error: 'All fields are required'},
        {status: 400}
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {error: 'Invalid email format'},
        {status: 400}
      );
    }

    // Here you would typically send an email using a service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Nodemailer
    
    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending
    // await sendEmail({
    //   to: 'kkw@hanyang.ac.kr',
    //   from: email,
    //   subject: `Contact Form: ${subject}`,
    //   text: `From: ${name} (${email})\n\n${message}`
    // });

    return NextResponse.json(
      {success: true, message: 'Message sent successfully'},
      {status: 200}
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {error: 'Internal server error'},
      {status: 500}
    );
  }
}
