import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.static('public', { extensions: ['html', 'js'] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

app.get('/assets/*', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(`dist${req.url}`);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/api/sendmail', (req, res) => {
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

app.use(express.static('dist'));

app.get('*', (_req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
