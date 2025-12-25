import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/profile.jpg"
                            alt="Nida Safdar"
                            width={400}
                            height={400}
                            className={styles.profileImage}
                        />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.bio}>
                            I am Nida Safdar, a Software Engineering student passionate about building digital solutions.
                            My journey involves developing numerous projects in both web and mobile application domains.
                        </p>
                        <p className={styles.bio}>
                            I am driven to build a successful career in web and app development. I specialize in
                            creating functional, user-friendly applications using React Native and modern Web technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
