import styles from './Projects.module.css';
import Link from 'next/link';

const projects = [
    {
        title: "TeamBoard",
        description: "A comprehensive project management application built with React Native. Features full-stack capabilities for team collaboration and task tracking.",
        tags: ["React Native", "Node.js", "MongoDB", "Full Stack"],
        link: "https://github.com/nidasafdar/TeamBoard"
    },
    {
        title: "AI Customer Support Dashboard",
        description: "An intelligent analytic dashboard for customer support, leveraging AI to provide actionable insights and performance metrics.",
        tags: ["React", "Python", "AI", "Data Visualization"],
        link: "https://github.com/nidasafdar/AI-Customer-Support-Dashboard"
    },
    {
        title: "Appointment System",
        description: "A web-based appointment booking system designed to streamline scheduling and management for businesses.",
        tags: ["Web Dev", "React", "Node.js"],
        link: "https://github.com/nidasafdar/Appointment-System"
    },
    {
        title: "Smart Classroom Attendance",
        description: "A React Native application for managing classroom attendance and access control, integrating smart features for efficiency.",
        tags: ["React Native", "Mobile App", "IoT Integration"],
        link: "https://github.com/nidasafdar/Smart-Classroom-Attendance"
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <Link href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                                    View Project &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
