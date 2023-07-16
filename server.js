import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

dotenv.config();
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

server.post('/api/sendmail', (req, res) => {
  const { name, email, attendance, guests, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.DESTINATION_EMAIL,
    subject: attendance,
    guests: guests,
    text: `Name: ${name}\nEmail: ${email}\nAttendance: ${attendance}\nGuests: ${guests}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error submitting RSVP:', error);
      res.status(500).send({ message: 'Error submitting RSVP' });
    } else {
      console.log('RSVP submitted:', info.response);
      res.status(200).send({ message: 'RSVP submitted successfully' });
    }
  });
});

server.set('port', process.env.PORT || 3001);
server.listen(server.get('port'), () => {
  console.log(`Server is running on port ${server.get('port')}`);
});
