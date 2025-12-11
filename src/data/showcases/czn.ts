import type { Project } from '@/types';

export const czn: Project = {
  title: "Chaos Zero Nightmare Deck Calculator",
  categories: ["Frontend", "Open-Source", "Tools"], 
  layout: "left",
  description: "A modern frontend application demonstrating advanced engineering principles. It is a dynamic cost calculator for the mobile game <strong>Chaos Zero Nightmare</strong>, providing users with <strong>instantaneous feedback</strong> on deck modifications. The architecture is built on a reactive state management core using <strong>Pinia</strong>, a fully type&#8209;safe codebase with <strong>TypeScript</strong>, and a scalable component&#8209;based design.",
  features: [
    {
      label: "Centralized State Management & Logic",
      text: "Engineered a reactive calculation engine using a centralized <strong>Pinia</strong> store as the single source of truth. All business logic and data mutations are handled within the store, ensuring predictable state changes and instantaneous UI updates."
    },
    {
      label: "Multi-Deck State Synchronization",
      text: "Manages the complex state of up to three independent decks simultaneously. The application's core logic correctly synchronizes actions across all decks to reflect a global cost, demonstrating sophisticated state management."
    },
    {
      label: "Scalable Component Architecture",
      text: "Built with a strict component&#8209;based structure and a fully type&#8209;safe <strong>TypeScript</strong> codebase. Implemented a dynamic data loader that automatically discovers and registers new presets, making the application highly maintainable and easy to extend."
    },
    {
      label: "Designed for a Global Audience",
      text: "Features a complete internationalization (i18n) system powered by <strong>Vue I18n</strong>. The UI is language&#8209;agnostic, with all user&#8209;facing text managed in locale files for seamless translation (EN & JP supported)."
    },
  ],
  tags: {
    techStack: [
      "Vue.js", "Vite", "TypeScript", "Pinia", "Vue I18n", 
      "HTML", "CSS", "JavaScript", "Tailwind CSS",
    ],
    concepts: [
      "Advanced Frontend Architecture", 
      "State Management", 
      "Internationalization (i18n)", 
      "Component Based Design", 
    ],
    infrastructure: [
      "Vercel"
    ]
  },
  
  liveUrl: "https://czn-deck-calculator.vercel.app/",
  githubUrl: "https://github.com/catptype/CZN-Deck-Calculator",
  
  images: [
    "/static/images/czn_project/screenshot1.png",
    "/static/images/czn_project/screenshot2.png",
  ]
}