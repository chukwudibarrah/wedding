import functions from 'firebase-functions';
import nodemailer from 'nodemailer';
import cors from 'cors';

const corsHandler = cors({ origin: true });

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

export const submit = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    corsHandler(req, res, async () => {
      if (req.method !== 'POST') {
        return;
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.name} just messaged me from my website`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
      };

      try {
        await mailTransport.sendMail(mailOptions);
        console.log('New email sent to:', gmailEmail);
        res.status(200).send({ isEmailSent: true });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ isEmailSent: false });
      }
    });
  }
});

