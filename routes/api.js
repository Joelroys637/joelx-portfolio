const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Ideally this should use a model, but for simplicity we access db here
const db = admin.firestore();

// API endpoint to handle inquiry submission
router.post('/inquiries', async (req, res) => {
    try {
        const data = req.body;
        // Validate required fields
        if (!data.name || !data.phone || !data.package || !data.email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Add timestamp
        data.createdAt = admin.firestore.FieldValue.serverTimestamp();
        
        // Save to Firestore 'inquiries' collection
        const docRef = await db.collection('inquiries').add(data);
        
        // Send Confirmation Email
        if (data.email) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT || 587,
                secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

            const mailOptions = {
                from: `"JoelX Orbit" <${process.env.SMTP_USER}>`,
                to: data.email,
                subject: 'Inquiry Received - JoelX Orbit',
                text: `Hello ${data.name},\n\nThank you for reaching out! We have received your inquiry for the ${data.package} package.\nOur team will get back to you shortly.\n\nBest regards,\nJoelX Orbit Team`,
                html: `<p>Hello <strong>${data.name}</strong>,</p><p>Thank you for reaching out! We have received your inquiry for the <strong>${data.package}</strong> package.</p><p>Our team will get back to you shortly.</p><br/><p>Best regards,<br/>JoelX Orbit Team</p>`
            };

            try {
                await transporter.sendMail(mailOptions);
                console.log('Confirmation email sent to', data.email);
            } catch (mailError) {
                console.error('Error sending confirmation email:', mailError);
                // We still want to return success since the inquiry was saved
            }
        }
        
        res.status(200).json({ success: true, id: docRef.id });
    } catch (error) {
        console.error('Error adding document: ', error);
        res.status(500).json({ error: 'Failed to submit inquiry' });
    }
});

module.exports = router;
