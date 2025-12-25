'use client';
import styles from './Contact.module.css';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');
    const [copyStatus, setCopyStatus] = useState('Copy');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('nida74663@gmail.com');
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy'), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        // Open default email client
        window.location.href = `mailto:nida74663@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        setFormStatus('Opening your email client...');
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setFormStatus('');
        }, 3000);
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <div className={styles.contentWrapper}>
                    <div className={styles.info}>
                        <p className={styles.text}>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className={styles.contactDetails}>
                            <h3 className={styles.contactLabel}>Email Me:</h3>
                            <div className={styles.emailContainer}>
                                <a href="mailto:nida74663@gmail.com" className={styles.emailLink}>
                                    nida74663@gmail.com
                                </a>
                                <button onClick={copyEmail} className={styles.copyButton} title="Copy email address">
                                    {copyStatus}
                                </button>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.input}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Send Message</button>
                        {formStatus && <div className={`${styles.statusMessage} ${styles.success}`}>{formStatus}</div>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
