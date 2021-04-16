const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.email, process.env.password);

var transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },

  auth: {
    user: process.env.email, // your email address to send email from
    pass: process.env.password, // your gmail account password
  },
});

module.exports = transporter;
