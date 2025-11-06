import styles from "./style.module.css";
import { useSmoothScroll } from "@hooks/useSmoothScroll";

const Header = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <header className={styles.header}>
      <div className={styles.nameSec}>
        <h1 className={styles.name}>Aleksandr Muchin</h1>
        <p className={styles.title}>Frontend Developer</p>
      </div>
      <nav className={styles.nav}>
        <button onClick={() => scrollTo("projects")} className={styles.link}>
          Projects
        </button>
        <button onClick={() => scrollTo("skills")} className={styles.link}>
          Skills
        </button>
        <button onClick={() => scrollTo("contact")} className={styles.link}>
          Contacts
        </button>
      </nav>
    </header>
  );
};

export default Header;
