// src/services/emailService.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Sends an email with an audio attachment.
 * @param {string} to - Recipient email address.
 * @param {Buffer} audioData - Buffer containing the audio data.
 */
export const sendEmail = async (to, audioData) => {
  const msg = {
    to,
    from: process.env.FROM_EMAIL, // Must be a verified sender in SendGrid
    subject: 'Your Daily Audio Summary',
    text: 'Please find attached your daily audio summary.',
    attachments: [
      {
        content: audioData.toString('base64'),
        filename: 'summary.mp3',
        type: 'audio/mpeg',
        disposition: 'attachment'
      }
    ]
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error.message);
    throw error;
  }
};
