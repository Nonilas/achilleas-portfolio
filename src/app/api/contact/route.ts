// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// These exports are critical for Vercel deployment
export const dynamic = 'force-dynamic'; // Ensures the route is not statically optimized
export const runtime = 'nodejs'; // Explicitly sets Node.js runtime

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400'
    }
  });
}

// Main POST handler for the contact form
export async function POST(request: Request) {
  try {
    // Parse form data with proper error handling
    let formData;
    try {
      formData = await request.json();
    } catch (error) {
      console.error('JSON parsing error:', error);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email configuration - directly from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'achilleasleiv@gmail.com';

    // Validate email credentials exist
    if (!emailUser || !emailPass) {
      console.error('Missing email credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Configure email content
    const mailOptions = {
      from: emailUser,
      to: recipientEmail,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3498db;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #3498db;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `
    };

    // Send email with proper error handling
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    
    // Return success response with CORS headers
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );
  } catch (error) {
    // Global error handler
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );
  }
}