import type { Project } from "@types";
import styles from "./style.module.css";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Selected Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className={styles.card}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.img}
            />
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
