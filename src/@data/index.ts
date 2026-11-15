import type { Project } from "@appTypes";
import jullery from "./img/jullery.jpg";
import gameOfPairs from "./img/game_of_pairs.png";
import brimm from "./img/brimm.png";
import isBananaRotten from "./img/is_banana_rotten.png";

export const projects: Project[] = [
  {
    title: "AI Image Classifier",
    description:
      "Resnet18 neural network that can distinguish rotten and fresh bananas provided through API written on FastAPI",
    image: isBananaRotten,
    tags: [
      "AI",
      "Image Classifier",
      "Computer Vision",
      "resnet18",
      "fastai",
      "onnx",
      "FastAPI",
    ],
    link: "https://is-banana-rotten.tertiomodo.com/",
    repo: "https://github.com/tertiomodo/is-banana-rotten-server",
  },
  {
    title: "Photographer Portfolio",
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
    repo: "https://github.com/tertiomodo/jullery",
  },
  {
    title: "Brimm - Water Tracker App",
    description:
      "Minimalistic water tracker app that could be installed as a PWA to your phone",
    image: brimm,
    tags: ["React", "TypeScript", "CSS Modules", "Vite", "PWA"],
    link: "https://brimm.tertiomodo.com/",
    repo: "https://github.com/tertiomodo/brimm",
  },
  {
    title: "Game of Pairs",
    description: "Card matching memory game written on pure JavaScript",
    image: gameOfPairs,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://tertiomodo.github.io/pairs-game/",
    repo: "https://github.com/tertiomodo/pairs-game",
  },
];

export const skills: string[] = [
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "onnx",
  "fastai",
  "Python",
  "FastAPI",
  "Astro",
  "Svelte",
  "HTML",
  "CSS",
  "SCSS",
  "Vitest",
  "Git",
  "CI/CD",
  "Vite",
  "Figma",
  "Claude Code",
  "Codex",
  "Agentic Development",
  "Performance Optimization",
  "Accessibility",
  "Responsive Design",
];
