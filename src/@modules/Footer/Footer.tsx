import styles from "./style.module.css";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Let's work together</h2>
        <p className={styles.text}>
          Feel free to reach me out if you'd like to discuss a project or just
          say hello!
        </p>
        <div className={styles.links}>
          <a href="mailto:itertiomodo@gmail.com" className={styles.link}>
            Email
          </a>
          <a
            href="https://github.com/tertiomodo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tertiomodo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/tertiomodo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
