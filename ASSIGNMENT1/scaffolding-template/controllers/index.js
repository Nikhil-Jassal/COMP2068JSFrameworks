const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Home page
router.get('/', (req, res) => {
  res.render('home', { 
    title: 'Home',
    active: { home: true }
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me',
    active: { about: true }
  });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('projects', { 
    title: 'My Projects',
    active: { projects: true }
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Me',
    active: { contact: true }
  });
});

// Handle contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`
    });

    console.log('Message sent: %s', info.messageId);
    res.render('contact', { 
      title: 'Contact Me',
      active: { contact: true },
      success: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error(error);
    res.render('contact', { 
      title: 'Contact Me',
      active: { contact: true },
      error: 'There was an error sending your message. Please try again.'
    });
  }
});

module.exports = router;