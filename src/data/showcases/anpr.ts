import type { Project } from '@/types';

export const anpr: Project = {
  title: "Real&#8209;time Vehicle Detection & License Plate Recognition System",
  categories: ["AI", "Full-Stack"], 
  layout: "left",
  description: "During my role at company, I was the sole developer tasked with designing, building, and deploying the Automatic Number Plate Recognition (ANPR) system from the ground up. I was responsible for the entire project lifecycle, from initial data collection to its final integration as the core technology for a commercial security product. The system performs real‑time vehicle analysis and Thai license plate recognition from live CCTV feeds.",
  responsibilities: [
    {
      label: "AI Development",
      text: "Solved the data scarcity problem by building a custom dataset and training YOLO models for vehicle detection, classification, and OCR.",
    },
    {
      label: "Full&#8209;Stack Engineering",
      text: "Architected and developed the complete application, including a high&#8209;performance multi&#8209;threaded Python backend and a responsive Django&#8209;powered web UI.",
    },
    {
      label: "End&#8209;to&#8209;End Deployment",
      text: "Managed deployment across different environments, from an optimized edge prototype on a Raspberry Pi 5 to a containerized production build for Linux servers.",
    },
    {
      label: "CI/CD & Infrastructure",
      text: "Established a GitLab CI/CD pipeline for automated Docker image builds and configured Nginx as a reverse proxy for pre&#8209;production testing.",
    }
  ],
  features: [
    {
      label: "Integrated Data Labeling Workflow",
      text: "To enable continuous model improvement, I built a Dataset Mode and a web UI to review, correct, and validate predictions, creating a powerful feedback loop for retraining.",
    },
    {
      label: "High&#8209;Performance Multi&#8209;Threading",
      text: "The backend pipeline is fully concurrent to ensure real&#8209;time performance without bottlenecks.",
    },
    {
      label: "Commercial Integration",
      text: `The final application was architected for a dual role: providing a staff&#8209;only UI for configuration and serving detection data to the central <a href="https://bgs.co.th/venus-sentinel-ระบบไม้กั้นอัตโนมัติ/" class="font-semibold text-blue-600 hover:text-blue-700">Venus Sentinel</a> platform via a REST API to control automated gate barriers.`,
    },
  ],
  tags: {
    techStack: [
      "Python", "Django", "Ultralytics", "Supervision", 
      "HTML", "CSS", "JavaScript", "Bootstrap",
      "WebSockets", "Redis", "SQLite",
    ],
    concepts: [
      "Full&#8209;Stack Development", 
      "RESTful API", 
      "Multi&#8209;threading", 
      "Edge Computing",
    ],
    infrastructure: [
      "Docker", "Gitlab CI/CD", "Nginx", "Raspberry Pi"
    ],
  },
  
  githubUrl: "https://github.com/catptype/ANPR-Showcase",
  
  images: [
    "/static/images/anpr_project/screenshot1.png",
    "/static/images/anpr_project/screenshot2.png",
    "/static/images/anpr_project/screenshot3.png",
    "/static/images/anpr_project/screenshot4.png",
    "/static/images/anpr_project/screenshot5.png",
  ]
}