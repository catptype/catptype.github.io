import type { Project } from '@/types';

export const portfolio: Project = {
  title: "Pawin Web Portfolio",
  categories: ["Frontend"],
  layout: "left",
  description: "The architectural overhaul of this personal portfolio, migrating it from a static HTML file to a dynamic, component&#8209;driven Single Page Application (SPA). The primary engineering goal was to solve maintainability bottlenecks by establishing a type&#8209;safe content schema with <strong>TypeScript</strong> and decoupling data from presentation using <strong>Vue 3</strong>. The result is a highly scalable and easily updatable platform.",

  features: [
    {
      label: "Decoupled Content Schema",
      text: "Established a strict, type&#8209;safe content schema using <strong>TypeScript</strong> interfaces. This design decouples all project data from the UI, allowing new content to be added via a central data source without modifying the presentation layer."
    },
    {
      label: "Reusable Component Library",
      text: "Developed a library of modular, single&#8209;responsibility <strong>Vue</strong> components designed to dynamically render complex and varied layouts, ensuring UI consistency and accelerating future development."
    },
    {
      label: "CI/CD Pipeline for Automated Deployment",
      text: "Implemented a full CI/CD pipeline using <strong>GitHub Actions</strong>. The workflow automatically builds the <strong>Vite</strong> application and deploys the optimized static assets to GitHub Pages on every commit, ensuring a seamless and error&#8209;free release process."
    }
  ],

  tags: {
    techStack: [
      "Vue.js", "TypeScript", "Vite", "Tailwind CSS", 
      "Pinia", "HTML", "GitHub Actions"
    ],
    concepts: [
      "Component&#8209;Based Architecture", 
      "Single Page Application", 
      "Type Safety", 
      "Clean Code"
    ],
    infrastructure: [
      "GitHub Pages", 
    ]
  },
  
  githubUrl: "https://github.com/catptype/catptype.github.io",

  images: [
    "/static/images/portfolio_project/screenshot1.png",
  ]
}