import styles from "./style.module.css";

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills & Technologies</h2>
      <div className={styles.container}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.badge}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
