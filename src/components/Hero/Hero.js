import Link from 'next/link'; // Import Link for 'View Work' button
import styles from './Hero.module.css';

export const metadata = {
    title: "Nida Safdar | Web & React Native Developer",
    description: "Portfolio of Nida Safdar, a passionate Web and React Native Application Developer.",
};

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.greeting}>Hi, I'm Nida Safdar</span>
                    <h1 className={styles.headline}>
                        Web & React Native <br />
                        <span className={styles.gradientText}>Developer</span>
                    </h1>
                    <p className={styles.description}>
                        I build accessible, pixel-perfect, and performant web applications that deliver exceptional user experiences.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#projects" className={styles.primaryButton}>
                            View Projects
                        </Link>
                        <Link href="#contact" className={styles.secondaryButton}>
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundBlur}></div>
        </section>
    );
};

export default Hero;
