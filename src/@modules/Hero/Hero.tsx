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
            I like transforming beautiful design layouts into well-functioning
            interfaces that benefit both users and business. I thrive on
            implementing interesting ideas and bringing projects to life. I'm
            passionate about technology and constantly seeking opportunities to
            learn and apply new skills
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
            <span className={styles.sep}>•</span>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              PDF Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
