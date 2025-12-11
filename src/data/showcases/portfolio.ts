import type { Project } from '@/types';

export const portfolio: Project = {
  title: "Pawin Web Portfolio",
  categories: ["Frontend"],
  layout: "left",
  description: "This project represents the strategic refactoring of my personal portfolio from a static, hardcoded HTML file into a scalable, component&#8209;driven Single Page Application (SPA). The goal was to solve maintenance bottlenecks by decoupling content from code. By leveraging <strong>Vue 3</strong> and <strong>TypeScript</strong>, I established a type&#8209;safe data structure that allows for easy addition of new projects and skills without touching the UI layer. The architecture includes reusable components for complex layouts and a global state&#8209;managed lightbox.",

  features: [
    {
      label: "Type&#8209;Safe Data Management",
      text: "Migrated loose HTML content into structured TypeScript interfaces, preventing runtime errors and ensuring consistent layout rendering across all project cards."
    },
    {
      label: "Modular Component Design",
      text: "Designed flexible, reusable Vue components that handle various content patterns (standard lists, nested case studies, info blocks) dynamically."
    },
    {
      label: "Automated Deployment",
      text: "configured a GitHub Actions pipeline to automatically build and deploy the optimized Vite application to GitHub Pages upon every push."
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