import type { Project } from '@/types';

export const anpr: Project = {
  title: "Real&#8209;time Vehicle Detection & License Plate Recognition System",
  categories: ["AI", "Full-Stack"], 
  layout: "left",
  description: "End&#8209;to&#8209;end development of a real&#8209;time <strong>Automatic Number Plate Recognition (ANPR)</strong> system, serving as the core technology for a commercial security product. The solution processes live CCTV feeds to analyze vehicle data and recognize Thai license plates with high accuracy, evolving from a conceptual prototype to a key feature in the <strong>Venus Sentinel</strong> automated barrier platform.",
  responsibilities: [
    {
      label: "AI Model Engineering",
      text: "<strong>Engineered</strong> a high&#8209;accuracy computer vision pipeline using <strong>YOLO</strong>. Overcame critical data scarcity by developing a custom <strong>dataset generation workflow</strong> to train models for vehicle classification and Thai license plate recognition."
    },
    {
      label: "Full&#8209;Stack Architecture",
      text: "<strong>Architected</strong> a scalable solution featuring a multi&#8209;threaded <strong>Python</strong> backend and a responsive <strong>Django</strong> interface. Decoupled video capture, AI inference, and UI broadcasting to ensure non&#8209;blocking, real&#8209;time performance."
    },
    {
      label: "Deployment Strategy",
      text: "<strong>Orchestrated</strong> the deployment lifecycle from optimized edge computing prototypes on <strong>Raspberry Pi 5</strong> to containerized production builds on Linux servers using <strong>Docker</strong>."
    },
    {
      label: "CI/CD & DevOps",
      text: "<strong>Established</strong> automated <strong>GitLab CI/CD</strong> pipelines for image generation and configured <strong>Nginx</strong> reverse proxies to simulate production environments for rigorous pre&#8209;deployment testing."
    }
  ],
  features: [
    {
      label: "Integrated Data Labeling Workflow",
      text: "Implemented a &quot;Dataset Mode&quot; with a built&#8209;in web UI to review, correct, and validate AI predictions, creating a <strong>continuous feedback loop</strong> that systematically improves model accuracy over time.",
    },
    {
      label: "Real&#8209;Time Monitoring Dashboard",
      text: "Delivered a responsive interface using <strong>WebSockets</strong> to push live video feeds, detection results, and system health metrics instantly to operators on both desktop and mobile devices.",
    },
    {
      label: "Commercial Integration",
      text: `Designed the system to function as a headless AI engine, exposing detection data via a <strong>REST API</strong> to trigger automated barriers within the <a href="https://bgs.co.th/venus-sentinel-ระบบไม้กั้นอัตโนมัติ/" class="font-semibold text-blue-600 hover:text-blue-700">Venus Sentinel</a> commercial platform.`,
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
      "Computer Vision",
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