import nodemailer from 'nodemailer';
import { env } from '@/config/env.js';

// Create transporter
const transporter = nodemailer.createTransport({
  host: env.EMAIL_HOST,
  port: env.EMAIL_PORT,
  secure: env.EMAIL_PORT === 465,
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASSWORD,
  },
});

export const sendQuoteConfirmationEmail = async (data: {
  name: string;
  email: string;
  quoteId: string;
  productInterest: string;
  location: string;
}): Promise<void> => {
  if (!env.ENABLE_EMAIL) {
    console.log('Email disabled. Would send:', data);
    return;
  }

  const html = `
    <h2>Quote Request Received</h2>
    <p>Dear ${data.name},</p>
    <p>Thank you for requesting a quote from Boma Mabati Factory!</p>
    <p><strong>Quote Details:</strong></p>
    <ul>
      <li>Quote ID: ${data.quoteId}</li>
      <li>Product: ${data.productInterest}</li>
      <li>Delivery Location: ${data.location}</li>
    </ul>
    <p>We will contact you within 2 hours with your personalized quote.</p>
    <p>Best regards,<br>Boma Mabati Factory Team</p>
  `;

  await transporter.sendMail({
    from: env.EMAIL_FROM,
    to: data.email,
    subject: 'Quote Request Received - Boma Mabati',
    html,
  });
};

export const sendContactConfirmationEmail = async (data: {
  name: string;
  email: string;
  messageId: string;
}): Promise<void> => {
  if (!env.ENABLE_EMAIL) {
    console.log('Email disabled. Would send:', data);
    return;
  }

  const html = `
    <h2>Message Received</h2>
    <p>Dear ${data.name},</p>
    <p>Thank you for contacting Boma Mabati Factory!</p>
    <p>We have received your message (ID: ${data.messageId}) and will respond within 24 hours.</p>
    <p>Best regards,<br>Boma Mabati Factory Team</p>
  `;

  await transporter.sendMail({
    from: env.EMAIL_FROM,
    to: data.email,
    subject: 'We Received Your Message - Boma Mabati',
    html,
  });
};

export const sendAdminNotificationEmail = async (data: {
  subject: string;
  html: string;
}): Promise<void> => {
  if (!env.ENABLE_EMAIL) {
    console.log('Admin email disabled. Would send:', data);
    return;
  }

  await transporter.sendMail({
    from: env.EMAIL_FROM,
    to: 'admin@bomamabati.co.ke',
    subject: data.subject,
    html: data.html,
  });
};
