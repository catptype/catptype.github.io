import type { Project } from '@/types';

export const gacha: Project = {
  title: "Case Study: Blue Archive Gacha Simulator",
  categories: ["Full-Stack", "Backend", "Frontend"],
  layout: "left",
  description: "An architectural case study implementing a feature&#8209;rich web application using two distinct design patterns: a classic <strong>monolithic architecture</strong> and a modern, <strong>decoupled API/SPA model</strong>. By engineering the exact same application with different technology stacks, this project serves as a direct comparison of their development complexities, performance characteristics, and deployment strategies.",

  versions: [
    {
      title: "1. The Monolithic Full&#8209;Stack App",
      description: "A server&#8209;side rendered (SSR) application built with <strong>Django</strong>. In this classic, tightly&#8209;coupled model, the server is responsible for all core functions: backend logic, data persistence, and rendering the HTML frontend.",
      liveUrl: "https://gacha-sim.onrender.com/",
      githubUrl: "https://github.com/catptype/Blue-Archive-Gacha-Simulator-V2",
      techStack: [
        {
          label: "Full&#8209;stack: Django",
          tags: ["Python", "Django", "SQLite", "PostgreSQL", "HTML", "CSS", "JS", "Tailwind", "Chart.js"],
        }
      ]
    },
    {
      title: "2. The Decoupled API & SPA Architectures",
      description: "A modern, API&#8209;driven design that enforces a strict separation of concerns. The backend is a stateless <strong>RESTful API</strong>, while the frontend is a dynamic <strong>Single&#8209;Page Application (SPA)</strong> that consumes it.",
      githubUrl: "https://github.com/catptype/Blue-Archive-Gacha-Simulator-Alternative",
      techStack: [
        {
          label: "Backend: FastAPI",
          tags: ["Python", "FastAPI", "Pydantic", "JSON Web Token", "Redis", "SQLAlchemy", "SQLite", "MySQL", "MariaDB","PostgreSQL"],
        },
        {
          label: "Frontend: Vue.js",
          tags: ["TypeScript", "Vue.js", "Tailwind CSS", "Vite", "Pinia", "Axios", "ApexCharts.js"],
        }
      ]
    }
  ],

  features: [
    {
      label: "Stateless Gacha & Achievement Engine",
      text: "Engineered stateless service classes to encapsulate all core business logic, creating a clean, testable, and highly maintainable codebase for processing user actions."
    },
    {
      label: "Asynchronous Widget-Based UI",
      text: "The dashboard UI shell loads instantly, with each data widget fetching its content concurrently. This parallel, non&#8209;blocking approach creates a highly responsive user experience."
    },
    {
      label: "Database Performance Optimization",
      text: "Implemented a cache&#8209;aside pattern using <strong>Redis</strong> to intercept frequent data requests, dramatically reducing database load and improving API response times for the dashboard."
    },
    {
      label: "Live Content Management System",
      text: "Architected the application to dynamically load all game data from the database, enabling administrators to push content updates in real time without requiring a server restart or redeployment."
    },
    {
      label: "Secure User & Guest Sessions",
      text: "Implemented a complete authentication system to manage user&#8209;specific data, while also providing a seamless guest mode for anonymous users."
    }
  ],
  tags: {
    concepts: [
      "Monolithic Architecture", 
      "Decoupled Architecture (API/SPA)",
      "RESTful API Design",
      "Asynchronous Loading", 
      "Caching Strategies",
      "Data Visualization", 
    ],
    infrastructure: [
      "Render"
    ]
  },

  infoBlock: {
    title: "Workflow Automation (n8n):",
    description: `To streamline the development process, I built a workflow using the automation tool n8n. This workflow automates the tedious task of gathering assets by web scraping the <a href="https://bluearchive.wiki/wiki/Characters" class="whitespace-nowrap font-semibold text-blue-600 hover:text-blue-700">Blue Archive Wiki</a> for all character images, ensuring the application's content can be kept up&#8209;to&#8209;date efficiently.`,
    url: "https://github.com/catptype/n8n-personal-project-workflows",
    linkText: "View Automation Workflow on Github",
  },
  
  images: [
    "/static/images/gacha_project/screenshot1.png",
    "/static/images/gacha_project/screenshot2.png",
    "/static/images/gacha_project/screenshot3.png",
    "/static/images/gacha_project/screenshot4.png",
  ]
}