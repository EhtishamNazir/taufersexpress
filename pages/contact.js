import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../components/Layout';
import classes from '../styles/contact.module.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send the form data to the server
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            // Form data successfully submitted
            console.log('Form submitted successfully!');
            // Reset the form fields
            setName('');
            setEmail('');
            setMessage('');
            toast.success("Email Sent to Service Provider");
        } else {
            // Error submitting the form
            toast.error('Error submitting form data');
        }
    };

    return (
        <Layout>
            <div className={classes.container}>
                <p className={classes.heading}>— CONTACT US —</p>
                <p className={classes.heading}>We are looking forward to your visit</p>
                <div className={classes.mapForm}>
                    <div className={classes.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.0897410626344!2d11.948964575114184!3d46.92061753509758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4777f340127b06ef%3A0xce1b7017d3500b1e!2sTaufers%20Express%20Pizza%20%26%20Grill!5e0!3m2!1sen!2s!4v1688996386066!5m2!1sen!2s" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={classes.form}>
                        <form onSubmit={handleSubmit} method="POST">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" value={name}
                                    onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" rows={6} value={message}
                                    onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>
                            <div className={classes.submitBtn}>
                                <button type="submit" className={`btn ${classes.btn}`}>Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Toaster />
        </Layout>
    )
}
