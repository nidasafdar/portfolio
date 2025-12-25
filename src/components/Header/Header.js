import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        Dev<span>Portfolio</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="#about" className={styles.navLink}>About</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#skills" className={styles.navLink}>Skills</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#projects" className={styles.navLink}>Projects</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#contact" className={styles.navLink}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.cta}>
                    <Link href="#contact" className={styles.button}>Let's Talk</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
