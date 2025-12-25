import styles from './Skills.module.css';

const skills = [
    { category: "Frontend", items: ["React Native", "React", "Next.js", "JavaScript", "HTML", "CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Firebase", "Figma"] }
];

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <div className={styles.grid}>
                    {skills.map((skillGroup, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{skillGroup.category}</h3>
                            <ul className={styles.list}>
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className={styles.item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
