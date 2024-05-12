import express from "express";
import emailjs from "emailjs";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email: senderEmail, message } = req.body;

  const server = emailjs.server.connect({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
    ssl: true,
  });

  const mailOptions = {
    text: message,
    from: senderEmail,
    to: "michaiahbos@yahoo.com",
    subject: `Message from ${name}`,
  };

  server.send(mailOptions, (err, message) => {
    if (err) {
      console.error(err);
      res.status(500).send({
        success: false,
        message: "Something went wrong. Try again later",
      });
    } else {
      res.send({
        success: true,
        message: "Thanks for contacting me. I will get back to you shortly",
      });
    }
  });
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
