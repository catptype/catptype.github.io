import type { Project } from '@/types';

export const pill: Project = {
  title: "Pill Identification System",
  categories: ["AI", "Full-Stack"],
  layout: "left",
  description: "Development of a high&#8209;fidelity prototype for a real&#8209;time <strong>Pill Identification System</strong>, successfully demonstrated at technology exhibitions. The solution is capable of recognizing diverse pharmaceutical forms—including tablets, capsules, blisters, vials, ampoules, and box packaging",
  responsibilities: [
    {
      label: "Dataset Generation Strategy",
      text: "<strong>Generated</strong> a high&#8209;quality proprietary dataset by photographing and labeling company&#8209;provided pharmaceutical samples. Converted physical inventory into a structured digital training set to overcome the complete lack of public data for this specific domain."
    },
    {
      label: "Advanced Computer Vision",
      text: "<strong>Engineered</strong> a custom vision pipeline using <strong>YOLO</strong> and <strong>OpenCV</strong>. Solved complex recognition challenges such as reading text on boxes, analyzing transparent ampoules, and identifying unique blister pack structures."
    },
    {
      label: "Full&#8209;Stack Architecture",
      text: "<strong>Architected</strong> a scalable backend using <strong>Django</strong> and designed internal frontend tools for model debugging and visual validation of inference results."
    },
    {
      label: "Backend API Integration",
      text: "<strong>Engineered</strong> the backend WebSocket architecture to facilitate real&#8209;time, bi&#8209;directional data transfer. <strong>Collaborated</strong> with mobile developers to define communication protocols, enabling the client application to transmit images and visualize AI inference results instantaneously."
    }
  ],
  features: [
    {
      label: "Multi&#8209;Form Factor Analysis",
      text: "Capable of processing a wide variety of pharmaceutical forms. The system supports identification for both individual units (tablets, capsules) and complex packaging types (blisters, vials, ampoules, and boxes).",
    },
    {
      label: "Fine&#8209;Grained Differentiation",
      text: "Achieved high&#8209;level distinction between visually similar medications, successfully differentiating products with identical packaging but distinct chemical compositions.",
    },
    {
      label: "Anomaly Detection",
      text: "Implemented robust logic to detect quality control issues, such as identifying broken tablets or flagging cross&#8209;contamination when mixed sizes or colors are detected in a single batch.",
    },
    {
      label: "Regulatory Standardization",
      text: "Integrated with the <strong>Thai Medicines Terminology (TMT)</strong> standard to ensure all identification results are mapped to official government reference codes (TPU).",
    }
  ],
  tags: {
    techStack: [
      "Python", "Django", "Ultralytics", "Supervision", 
      "HTML", "CSS", "JavaScript", "Tailwind CSS",
      "WebSockets", "Redis", "SQLite",
    ],
    concepts: [
      "Full&#8209;Stack Development", 
      "Computer Vision",
      "Data Engineering",
      "API Design"
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