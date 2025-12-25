import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
                <div className={styles.socials}>
                    {/* Social links placeholder */}
                    <a href="https://github.com/nidasafdar" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                    <a href="https://www.linkedin.com/" className={styles.link}>LinkedIn</a>
                    <a href="https://twitter.com/" className={styles.link}>Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
