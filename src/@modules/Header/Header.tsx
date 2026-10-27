import { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { useSmoothScroll } from "@hooks/useSmoothScroll";

const cvFiles = [
  { lang: "EN", href: "./Aleksandr-Muchin-Frontend.pdf" },
  { lang: "RU", href: "./Мучин-Александр-Frontend.pdf" },
];

const Header = () => {
  const { scrollTo } = useSmoothScroll();
  const cvRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (e: PointerEvent) => {
      if (!cvRef.current?.contains(e.target as Node)) {
        cvRef.current?.removeAttribute("open");
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.nameSec}>
        <h1 className={styles.name}>Aleksandr Muchin</h1>
        <p className={styles.title}>React Frontend Developer</p>
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
        <details ref={cvRef} className={styles.dropdown}>
          <summary className={styles.cv}>Download CV</summary>
          <div className={styles.menu}>
            {cvFiles.map(({ lang, href }) => (
              <a
                key={lang}
                href={href}
                download
                onClick={() => cvRef.current?.removeAttribute("open")}
                className={styles.menuItem}
              >
                {lang}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
};

export default Header;
