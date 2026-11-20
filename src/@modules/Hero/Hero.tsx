import styles from "./style.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.imgWrap}>
          <img
            src="./profile_picture.jpg"
            alt="Aleksandr Muchin"
            className={styles.img}
          />
        </div>
        <div className={styles.text}>
          <p className={styles.intro}>
            I’m a Senior Frontend Developer with strong AI skills. I have 5
            years of professional experience, including 4 years in a fintech and
            1+ year in an outsourcing agency. I specialize in building
            high-performance interfaces, optimizing pages metrics, and
            delivering clean, reliable frontend code. I’ve worked on landing
            pages, marketing platforms, and large-scale product websites,
            consistently improving performance, accessibility, and overall user
            experience.
          </p>
          <div className={styles.contact}>
            <a href="mailto:itertiomodo@gmail.com" className={styles.link}>
              itertiomodo@gmail.com
            </a>
            <span className={styles.sep}>•</span>
            <a
              href="https://github.com/tertiomodo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <span className={styles.sep}>•</span>
            <a
              href="https://www.linkedin.com/in/tertiomodo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
