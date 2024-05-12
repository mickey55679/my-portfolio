import express from "express";
import { SMTPClient } from "emailjs";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email: senderEmail, message } = req.body;
  // Set up SMTP client
  const client = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
    ssl: true,
  });
  // Email options
  const mailOptions = {
    text: message,
    from: senderEmail,
    to: "michaiahbos@yahoo.com",
    subject: `Message from ${name}`,
  };

   // Try to send the email
  try {
    const sendResult = await client.send(mailOptions);
    res.send({
      success: true,
      message: "Thanks for contacting me. I will get back to you shortly",
      details: sendResult,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
    });
  }
});
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));  