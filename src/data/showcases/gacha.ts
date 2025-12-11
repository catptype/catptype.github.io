import type { Project } from '@/types';

export const gacha: Project = {
  title: "Case Study: Blue Archive Gacha Simulator",
  categories: ["Full-Stack", "Backend", "Frontend"],
  layout: "left",
  description: "I built this web application not just once, but multiple times as a personal case study in full&#8209;stack web development. This is a non&#8209;profit, fan&#8209;made project created for fun and educational purposes. The goal was to implement the exact same feature&#8209;rich application using different technology stacks to directly compare their complexities, advantages, and architectural patterns. This exploration covers two primary architectures: a traditional monolithic app and a modern decoupled API&#8209;driven app.",

  versions: [
    {
      title: "1. The Monolithic Full&#8209;Stack App",
      description: "The original version is a classic server&#8209;side rendered application where Django handles everything: backend logic, database interaction, and frontend template rendering.",
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
      description: "This version follows a modern, API&#8209;driven design. The backend is a pure JSON API, completely separate from the frontend, which is a standalone Single Page Application (SPA).",
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
      label: "Realistic Gacha Simulation",
      text: "Implemented a secure backend service to handle pulls with banner&#8209;specific rates, complete with high&#8209;impact animations for revealing rare characters."
    },
    {
      label: "Asynchronous Dashboard",
      text: "Developed a dynamic, widget&#8209;based dashboard that uses asynchronous JavaScript to load data widgets independently, preventing page reloads and improving user experience."
    },
    {
      label: "Data Visualization",
      text: "Integrated interactive charts to provide users with a visual breakdown of their gacha history and per&#8209;banner statistics."
    },
    {
      label: "Optimized Performance with Caching",
      text: "Implemented a caching layer (using the cache&#8209;aside pattern) to intercept database requests, significantly reducing redundant queries and improving application responsiveness."
    },
    {
      label: "Zero&#8209;Downtime Content Management",
      text: "Architected for live content updates, allowing new data to appear on the site instantly after a database update without requiring a server restart or redeployment."
    },
    {
      label: "Dual User Modes",
      text: "Features a full user authentication system to save all gacha history, achievements, and collections, while also supporting a flexible guest mode for instant access."
    }
  ],
  tags: {
    concepts: [
      "Full&#8209;Stack Development", 
      "Data Visualization", 
      "Asynchronous Loading", 
      "User Authentication",
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