import type { Project } from "@types";
import jullery from "./img/jullery.jpg";
import gameOfPairs from "./img/game_of_pairs.png";

export const projects: Project[] = [
  {
    title: "Photographer portfolio",
    description:
      "Interactive photo gallery with masonry layout and smooth animations",
    image: jullery,
    tags: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Vite",
      "Custom slider library",
    ],
    link: "https://jullery.vercel.app/",
  },
  {
    title: "Game of Pairs",
    description: "Card matching memory game written on pure JavaScript",
    image: gameOfPairs,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://tertiomodo.github.io/pairs-game/",
  },
];

export const skills: string[] = [
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Astro",
  "HTML",
  "CSS",
  "SCSS",
  "Git",
  "Vite",
  "Figma",
  "Responsive Design",
];
