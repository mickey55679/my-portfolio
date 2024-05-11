const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", (req, res) => {
    console.log(req.body)
  const { name, email, message } = req.body;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

  const transporter = nodemailer.createTransport({
    service: "yahoo", 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: email,
    to: "michaiahbos@yahoo.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (process.env.NODE_ENV === "development") {
      // Log the full error details in development environment
      console.error(err);
      res.status(500).send({
        success: false,
        message: "Something went wrong. Try again later",
      });
    } else {
      res.send({
        success: true,
        message: "Thanks for contacting us. We will get back to you shortly",
      });
    }
  });
});
const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Server is running on port ${port}`));
