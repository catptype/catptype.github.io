import type { Project } from '@/types';

export const anpr: Project = {
  title: "Real&#8209time Vehicle Detection & License Plate Recognition System",
  layout: "left",
  description: "During my role at company, I was the sole developer tasked with designing, building, and deploying the Automatic Number Plate Recognition (ANPR) system from the ground up. I was responsible for the entire project lifecycle, from initial data collection to its final integration as the core technology for a commercial security product. The system performs real‑time vehicle analysis and Thai license plate recognition from live CCTV feeds.",
  responsibilities: [
    "<strong>AI Development:</strong> Solved the data scarcity problem by building a custom dataset and training YOLO models for vehicle detection, classification, and OCR.",
    "<strong>Full&#8209Stack Engineering:</strong> Architected and developed the complete application, including a high&#8209performance multi&#8209threaded Python backend and a responsive Django&#8209powered web UI.",
    "<strong>End&#8209to&#8209End Deployment:</strong> Managed deployment across different environments, from an optimized edge prototype on a Raspberry Pi 5 to a containerized production build for Linux servers.",
    "<strong>CI/CD & Infrastructure:</strong> Established a GitLab CI/CD pipeline for automated Docker image builds and configured Nginx as a reverse proxy for pre&#8209production testing.",
  ],
  features: [
    "<strong>Integrated Data Labeling Workflow:</strong> To enable continuous model improvement, I built a Dataset Mode and a web UI to review, correct, and validate predictions, creating a powerful feedback loop for retraining.",
    "<strong>High&#8209Performance Multi&#8209Threading:</strong> The backend pipeline is fully concurrent to ensure real&#8209time performance without bottlenecks.",
    `<strong>Commercial Integration:</strong> The final application was architected for a dual role: providing a staff&#8209only UI for configuration and serving detection data to the central <a href="https://bgs.co.th/venus-sentinel-ระบบไม้กั้นอัตโนมัติ/" class="font-semibold text-blue-600 hover:text-blue-700">Venus Sentinel</a> platform via a REST API to control automated gate barriers.`
  ],
  tags: {
    techStack: [
      "Python", "Django", "Ultralytics", "Supervision", 
      "HTML", "CSS", "JavaScript", "Bootstrap",
      "WebSockets", "Redis", "SQLite",
    ],
    concepts: [
      "Full&#8209Stack Development", 
      "RESTful API", 
      "Multi&#8209threading", 
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