import type { Project } from '@/types';

export const pill: Project = {
  title: "Pill Identification System",
  layout: "right",
  description: "During my employment, I was the core developer for this real&#8209time Pill Identification system, which was successfully demonstrated at two public technology events. I was responsible for the entire technical execution, from creating a custom dataset to building the full&#8209stack architecture and the core AI engine capable of identifying diverse medicine forms—including tablets, capsules, boxes, blisters, and vials.",
  responsibilities: [
    "<strong>Custom Dataset Curation:</strong> With no public dataset available, I single&#8209handedly photographed, processed, and labeled a comprehensive custom dataset, which formed the foundation of the AI's accuracy.",
    
    "<strong>AI Engine Development:</strong> Developed the core computer vision engine using YOLO (Ultralytics) to detect and classify all specified medicine forms, from simple pills to complex packaging.",
    
    "<strong>Full&#8209Stack System Architecture:</strong> Designed the end&#8209to&#8209end system and built a robust Django backend, including a functional frontend UI for crucial debugging and visual validation of the AI engine.",
    
    "<strong>API Integration for Mobile:</strong> Engineered and provided a real&#8209time WebSocket API to the mobile development team, enabling seamless integration into the production application.",
  ],
  features: [
    "<strong>Multi&#8209Form Identification:</strong> The core feature of the system is its ability to identify medicine in various forms including tablets, capsules, boxes, blisters, ampoules, and vials.",
    
    "<strong>Fine&#8209Grained Recognition:</strong> The system can distinguish between medicines with nearly identical visual appearances—a task that is challenging for the human eye.",
    
    "<strong>Robustness to Challenges:</strong> Accurately identifies pills even in difficult scenarios, such as when a package contains a non&#8209uniform mix of pills or includes broken tablets.",
    
    "<strong>Standardized Identification:</strong> Utilizes the official Thai Medicines Terminology (TMT) number as a unique identifier, linking every identification to a national standard.",
  ],
  tags: {
    techStack: [
      "Python", "Django", "Ultralytics", "Supervision", 
      "HTML", "CSS", "JavaScript", "Tailwind CSS",
      "WebSockets", "Redis", "SQLite",
    ],
    concepts: [
      "Full&#8209Stack Development", 
    ],
  },
  
  githubUrl: "https://github.com/catptype/Pill-Identify-Showcase",
  isGrid: true,
  images: [
    "/static/images/pill_project/screenshot1.png",
    "/static/images/pill_project/screenshot2.png",
    "/static/images/pill_project/screenshot3.png",
    "/static/images/pill_project/screenshot4.png",
    "/static/images/pill_project/screenshot5.png",
    "/static/images/pill_project/screenshot6.png",
    "/static/images/pill_project/screenshot7.png",
    "/static/images/pill_project/screenshot8.png",
    "/static/images/pill_project/screenshot9.png",
    "/static/images/pill_project/screenshot10.png",
  ]
}