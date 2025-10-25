import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, surgeryType, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for admin
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@vikasrathitrainer.com',
      subject: `🏥 New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f7f7f7 0%, #ffffff 100%);">
          <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;">

            <!-- Header -->
            <div style="text-align: center; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 2px solid #f1f5f9;">
              <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #1e40af, #d4af37); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px; box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);">
                <span style="color: white; font-size: 24px; font-weight: bold;">VR</span>
              </div>
              <h1 style="color: #1e40af; margin: 0; font-size: 28px; font-weight: 700;">New Client Inquiry</h1>
              <p style="color: #64748b; margin: 8px 0 0 0; font-size: 16px;">Post-Surgery Fitness Recovery Service</p>
            </div>

            <!-- Priority Alert -->
            <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 5px solid #d4af37; box-shadow: 0 2px 8px rgba(212, 175, 55, 0.1);">
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <span style="font-size: 20px; margin-right: 10px;">⚡</span>
                <h3 style="color: #92400e; margin: 0; font-size: 18px; font-weight: 600;">Action Required</h3>
              </div>
              <p style="color: #92400e; margin: 0; line-height: 1.6;">
                Please respond within 24 hours to maintain excellent customer service standards.
              </p>
            </div>

            <!-- Client Information Card -->
            <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e2e8f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 40px; height: 40px; background: #1e40af; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <span style="color: white; font-size: 18px; font-weight: bold;">👤</span>
                </div>
                <h3 style="color: #1e293b; margin: 0; font-size: 20px; font-weight: 600;">Client Information</h3>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                  <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${name}</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                  <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${email}</p>
                </div>
                ${phone ? `
                <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                  <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${phone}</p>
                </div>
                ` : ''}
                ${surgeryType ? `
                <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Service Interest</p>
                  <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${surgeryType}</p>
                </div>
                ` : ''}
              </div>
            </div>

            <!-- Message Content -->
            <div style="background: linear-gradient(135deg, #ffffff, #f8fafc); padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 2px solid #e2e8f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 40px; height: 40px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <span style="color: white; font-size: 18px;">💬</span>
                </div>
                <h3 style="color: #1e293b; margin: 0; font-size: 20px; font-weight: 600;">Client Message</h3>
              </div>

              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
                <p style="color: #374151; margin: 0; line-height: 1.7; font-size: 16px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Action Items -->
            <div style="background: linear-gradient(135deg, #ecfdf5, #d1fae5); padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #a7f3d0;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 20px; margin-right: 10px;">✅</span>
                <h3 style="color: #065f46; margin: 0; font-size: 18px; font-weight: 600;">Recommended Actions</h3>
              </div>
              <ul style="color: #065f46; margin: 0; padding-left: 30px; line-height: 1.8;">
                <li>Review client requirements and medical history</li>
                <li>Prepare personalized recovery assessment</li>
                <li>Schedule initial consultation within 24-48 hours</li>
                <li>Send welcome package with preparation guidelines</li>
              </ul>
            </div>

            <!-- Quick Response Template -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #e2e8f0;">
              <h4 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">📝 Quick Response Template</h4>
              <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; font-family: monospace; font-size: 14px; color: #374151;">
                Subject: Thank you for contacting Vikas Rathi Trainer<br><br>
                Dear ${name},<br><br>
                Thank you for your interest in our post-surgery fitness recovery services. I've received your inquiry and would like to schedule a consultation to discuss your specific needs.<br><br>
                Please let me know your availability for a call this week.<br><br>
                Best regards,<br>
                Vikas Rathi<br>
                Post-Surgery Fitness Recovery Specialist
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding-top: 25px; border-top: 2px solid #f1f5f9;">
              <div style="display: inline-flex; align-items: center; gap: 20px; margin-bottom: 15px;">
                <div style="text-align: center;">
                  <div style="font-size: 18px; margin-bottom: 5px;">📞</div>
                  <p style="margin: 0; color: #64748b; font-size: 12px;">Call</p>
                  <p style="margin: 2px 0 0 0; color: #1e40af; font-weight: 600; font-size: 14px;">+91 98765 43210</p>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 18px; margin-bottom: 5px;">✉️</div>
                  <p style="margin: 0; color: #64748b; font-size: 12px;">Email</p>
                  <p style="margin: 2px 0 0 0; color: #1e40af; font-weight: 600; font-size: 14px;">info@vikasrathitrainer.com</p>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 18px; margin-bottom: 5px;">🏥</div>
                  <p style="margin: 0; color: #64748b; font-size: 12px;">Location</p>
                  <p style="margin: 2px 0 0 0; color: #1e40af; font-weight: 600; font-size: 14px;">Fitness Recovery Center</p>
                </div>
              </div>

              <p style="color: #64748b; margin: 15px 0 0 0; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                This inquiry was submitted through the Vikas Rathi Trainer website contact form.<br>
                <strong>Timestamp:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email to admin
    await transporter.sendMail(mailOptions);

    // Send acknowledgment email to customer
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Vikas Rathi Trainer',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
          <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #1e40af, #d4af37); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <span style="color: white; font-size: 32px; font-weight: bold;">VR</span>
              </div>
              <h1 style="color: #1e40af; margin: 0; font-size: 28px;">Thank You!</h1>
            </div>

            <div style="background: #fef3c7; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #d4af37;">
              <h2 style="color: #92400e; margin: 0 0 15px 0; font-size: 20px;">Your Message Has Been Received</h2>
              <p style="color: #92400e; margin: 0; line-height: 1.6;">
                Dear ${name},<br><br>
                Thank you for reaching out to Vikas Rathi Trainer. We have received your inquiry regarding post-surgery fitness recovery and appreciate your interest in our professional training services.
              </p>
            </div>

            <div style="background: #f1f5f9; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">What Happens Next?</h3>
              <ul style="color: #64748b; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>We'll contact you to discuss your specific recovery needs</li>
                <li>A personalized recovery plan will be prepared for you</li>
                <li>We'll schedule your first consultation at your convenience</li>
              </ul>
            </div>

            <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #10b981;">
              <h3 style="color: #065f46; margin: 0 0 10px 0; font-size: 16px;">Your Contact Details</h3>
              <p style="color: #065f46; margin: 0; line-height: 1.6;">
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                ${phone ? `<strong>Phone:</strong> ${phone}<br>` : ''}
                ${surgeryType ? `<strong>Service Interest:</strong> ${surgeryType}` : ''}
              </p>
            </div>

            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">
                Need immediate assistance? Contact us directly:
              </p>
              <p style="color: #1e40af; margin: 0; font-weight: bold;">
                📞 +91 98765 43210 | ✉️ info@vikasrathitrainer.com
              </p>
              <p style="color: #64748b; margin: 15px 0 0 0; font-size: 12px;">
                Vikas Rathi Trainer - Professional Post-Surgery Fitness Recovery
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send acknowledgment email to customer
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}