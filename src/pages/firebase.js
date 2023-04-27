const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.https.onCall((data, context) => {
  const { name, email, message } = data;

  const mailOptions = {
    from: gmailEmail,
    to: 'arabian.engineering.ae@gmail.com',
    subject: 'New message from your website Contact Page',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  return transporter.sendMail(mailOptions);
});
