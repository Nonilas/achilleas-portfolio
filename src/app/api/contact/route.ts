// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as admin from 'firebase-admin';
// src/app/api/contact/route.ts
export const runtime = 'nodejs'; // Ensures server-side Node environment

if (!admin.apps.length) {
    admin.initializeApp();
  }
export async function POST(request: Request) {
  try {
    // Parse form data
    const formData = await request.json();
    const { name, email, subject, message } = formData;
    const config = process.env.FIREBASE_CONFIG 
        ? JSON.parse(process.env.FIREBASE_CONFIG)
        : { email: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } };
  
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.email.user || process.env.EMAIL_USER,
          pass: config.email.pass || process.env.EMAIL_PASS
        }
      });

    // Configure email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'achilleasleiv@gmail.com',
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

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}