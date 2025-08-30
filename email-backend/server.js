require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Nodemailer transporter setup
// Configure this with your email service provider details
// For Gmail, you'll need to enable "Less secure app access" or use App Passwords
// if you have 2-Factor Authentication enabled. App Passwords are more secure.
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'outlook', 'smtp.mailtrap.io', etc.
  auth: {
    user: 'naruramanareddy21@gmail.com',    // Your Gmail address
    pass: 'Naru#2004' // Your Gmail app password or regular password (less secure)
  }
});

// API endpoint to send email
app.post('/send-email', (req, res) => {
  const { name, email, subject, messageContent } = req.body;

  if (!name || !email || !subject || !messageContent) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const mailOptions = {
    from: 'naruramanareddy21@gmail.com', // Sender address (can be the same as EMAIL_USER)
    to: 'naruramanareddy3@gmail.com', // Recipient email address
    subject: `Portfolio Contact: ${subject} from ${name} (${email})`,
    html: `
      <p>You have a new message from your portfolio contact form:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Subject:</strong> ${subject}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${messageContent}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message.', error: error.message });
    }
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});