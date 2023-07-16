import nodemailer from 'nodemailer';
import fs from 'fs';

const logToFile = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFile('sendMail.log', logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
};

const sendMail = async (name, to, from, attendance, guests, message) => {
  logToFile('Submitting RSVP..., in the sendMail.js file');
  try {
    let transporter = nodemailer.createTransport({
      service: 'postfix',
      host: 'localhost',
      secure: false,
      port: 25,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from,
      to,
      subject: attendance,
      guests: guests,
      text: `${name} has submitted an RSVP: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    logToFile('Email sent!');
    return true;
  } catch (error) {
    logToFile(`Error submitting RSVP: ${error}`);
    return false;
  }
};

export default sendMail;
