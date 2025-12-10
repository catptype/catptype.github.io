import type { Project } from '@/types';

export const czn: Project = {
  title: "Chaos Zero Nightmare Deck Calculator",
  layout: "left",
  description: "I built this modern web application to demonstrate my skills in component&#8209;based frontend architecture. The tool provides real&#8209;time cost tracking for deck modifications in the game Chaos Zero Nightmare and is built entirely with a modern Vue.js stack, ensuring a fast, responsive, and type&#8209;safe user experience.",
  features: [
    {
      label: "Reactive State Management",
      text: "The core of the application is a reactive calculation engine powered by a central Pinia store. This single source of truth architecture enables real&#8209;time cost updates across multiple decks and a full Undo system.",
    },
    {
      label: "Type&#8209;Safe Codebase with TypeScript",
      text: "The entire project is written in TypeScript, leveraging static typing to create a robust, scalable, and maintainable application with fewer runtime errors.",
    },
    {
      label: "Component&#8209;Based Architecture",
      text: "The UI is built with a modern, component&#8209;based approach, breaking the interface down into small, reusable components to ensure a clean and scalable codebase.",
    },
    {
      label: "Internationalization",
      text: "The application was built from the ground up with full language support, with all user&#8209;facing strings managed in locale files for easy translation (currently supporting English & Japanese).",
    },
  ],
  tags: {
    techStack: [
      "Vue.js", "Vite", "TypeScript", "Pinia", "Vue I18n", 
      "HTML", "CSS", "JavaScript", "Tailwind CSS",
    ],
    concepts: [
      "Frontend Development", 
      "State Management", 
      "Internationalization (i18n)", 
      "Component Architecture", 
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