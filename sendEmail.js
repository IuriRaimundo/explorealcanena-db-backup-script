const nodemailer = require('nodemailer');
const creds = require('./creds.js');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: creds.email,
    pass: creds.password,
  },
});

function sendEmail(content, date) {
  const mailOptions = {
    from: creds.email,
    to: 'explorealcanena@gmail.com',
    subject: 'Firestore backup: ' + date,
    text: '',
    attachments: {
      filename: date + '.json',
      content: content,
    },
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('sendMail: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendEmail;
