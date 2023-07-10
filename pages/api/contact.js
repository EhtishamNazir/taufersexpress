import nodemailer from 'nodemailer';

import { client } from '../../lib/client';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            await client.create({
                _type: 'contact',
                name: name,
                email: email,
                message: message,
            }).then((data) => {
                res.status(200).json(data._id);
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Error, check console." });
        }

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: 'ehtishamnazir28@gmail.com',
            to: email,
            subject: 'Your message received',
            text: 'Thank you for contacting us. We have received your message.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
