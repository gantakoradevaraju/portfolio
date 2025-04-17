import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    // Validate input
    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // Validate environment variables
    const requiredEnvVars = [
      'SMTP_HOST',
      'SMTP_PORT',
      'SMTP_USER',
      'SMTP_PASSWORD',
      'SMTP_FROM_NAME',
      'SMTP_TO_EMAIL'
    ]

    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        console.error(`Missing required environment variable: ${envVar}`)
        return NextResponse.json(
          { error: 'Server configuration error' },
          { status: 500 }
        )
      }
    }

    // Create email transporter with proper Gmail settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify SMTP connection
    try {
      await transporter.verify()
      console.log('SMTP connection verified')
    } catch (verifyError) {
      console.error('SMTP Verification Error:', verifyError)
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'Portfolio Contact Form',
        address: process.env.SMTP_USER || ''
      },
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
      subject: `${process.env.SMTP_SUBJECT_PREFIX || 'New Contact Form Message from'} ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: ${process.env.EMAIL_TEXT_COLOR || '#333333'};">
          <h2 style="color: ${process.env.EMAIL_BRAND_COLOR || '#0066cc'};">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: ${process.env.EMAIL_BG_COLOR || '#f5f5f5'}; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <br>
          <p style="color: ${process.env.EMAIL_FOOTER_COLOR || '#666666'}; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    }

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions)
      console.log('Email sent:', info)
      
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } catch (sendError: any) {
      console.error('Email Send Error:', {
        error: sendError,
        errorCode: sendError.code,
        errorCommand: sendError.command,
        errorResponse: sendError.response
      })
      
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('General Error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
} 