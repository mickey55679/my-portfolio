import express from "express";
import emailjs from "@emailjs/browser";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email: senderEmail, message, recipientEmail } = req.body;

  // Set up SMTP client
  let client = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
    ssl: true, // Use SSL if enabled
  });

  // Email options
  const mailOptions = {
    text: message,
    from: senderEmail,
    to: recipientEmail || "your-default-recipient@example.com", // Default recipient or use provided recipientEmail
    subject: `Message from ${name}`,
  };

  try {
    // Try to send the email
    const sendResult = await client.send(mailOptions);
    console.log("Send Result:", sendResult);
    // Log successful email send
    res.send({
      success: true,
      message: "Thanks for contacting me. I will get back to you shortly!",
      details: sendResult || "No details available",
    });
  } catch (err) {
    // Log the error
    console.error("Failed to send email:", err);
    console.error("Error Stack Trace:", err.stack); // Log stack trace
    console.error("Error Properties:", err);
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
      error: err.message,
    });
  } // no need for finally block since there's no client closure
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
