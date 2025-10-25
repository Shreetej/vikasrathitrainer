import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Only allow the configured admin email
    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        { error: 'Unauthorized email address' },
        { status: 403 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in memory (in production, use Redis or database)
    (global as any).otpStore = (global as any).otpStore || {};
    (global as any).otpStore[email] = {
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
    };

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send OTP email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Vikas Rathi Trainer - Admin Login OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1e40af; margin-bottom: 20px; text-align: center;">Admin Login Verification</h2>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #d4af37;">
              <h3 style="color: #92400e; margin-bottom: 15px;">Your One-Time Password (OTP)</h3>
              <div style="font-size: 32px; font-weight: bold; color: #1e40af; text-align: center; letter-spacing: 8px; font-family: monospace;">
                ${otp}
              </div>
              <p style="color: #92400e; margin-top: 15px; font-size: 14px;">
                This OTP will expire in 10 minutes. Please use it to complete your login.
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px;">
                If you didn't request this OTP, please ignore this email.
              </p>
              <p style="color: #64748b; font-size: 14px; margin-top: 10px;">
                Vikas Rathi Trainer Admin Panel
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('OTP sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}