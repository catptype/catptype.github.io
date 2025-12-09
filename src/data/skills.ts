import type { SkillCategory } from '@/types';

// 1. Core Concepts (The text badges)
export const coreConcepts: string[] = [
  "Object-Oriented Programming",
  "Multi-threading",
  "RESTful APIs"
];

// 2. Technical Skills (The logo cards)
export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Computer Vision",
    skills: [
      { name: "PyTorch", url: "https://pytorch.org/", icon: "/static/images/logo/PyTorch.svg" },
      { name: "Ultralytics", url: "https://ultralytics.com/", icon: "/static/images/logo/Ultralytics.svg" },
      { name: "SuperVision", url: "https://supervision.roboflow.com/", icon: "/static/images/logo/SuperVision.png" },
      { name: "OpenCV", url: "https://opencv.org/", icon: "/static/images/logo/OpenCV.svg" },
      { name: "TensorFlow", url: "https://www.tensorflow.org/", icon: "/static/images/logo/TensorFlow.svg", prior: true },
      { name: "Keras", url: "https://keras.io/", icon: "/static/images/logo/Keras.svg", prior: true },
    ]
  },
  {
    title: "Web Development - Languages",
    skills: [
      { name: "Python", url: "https://www.python.org/", icon: "/static/images/logo/Python.svg" },
      { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "/static/images/logo/HTML.svg" },
      { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "/static/images/logo/CSS.svg" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "/static/images/logo/JavaScript.svg" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: "/static/images/logo/TypeScript.svg" },
      { name: "C#", url: "https://docs.microsoft.com/en-us/dotnet/csharp/", icon: "/static/images/logo/CSharp.svg", prior: true  },
      { name: "Java", url: "https://www.java.com/", icon: "/static/images/logo/Java.svg", prior: true  },
      { name: "MATLAB", url: "https://www.mathworks.com/products/matlab.html", icon: "/static/images/logo/MATLAB.svg", prior: true  },
    ]
  },
  {
    title: "Web Development - Backend & Frontend",
    skills: [
      { name: "Django", url: "https://www.djangoproject.com/", icon: "/static/images/logo/Django.svg" },
      { name: "FastAPI", url: "https://fastapi.tiangolo.com/", icon: "/static/images/logo/FastAPI.svg" },
      { name: "Node.js", url: "https://nodejs.org/", icon: "/static/images/logo/Node.js.svg" },
      { name: "Vue.js", url: "https://vuejs.org/", icon: "/static/images/logo/Vue.js.svg" },
      { name: "Vite", url: "https://vitejs.dev/", icon: "/static/images/logo/Vite.js.svg" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: "/static/images/logo/TailwindCSS.svg" },
      { name: "Bootstrap", url: "https://getbootstrap.com/", icon: "/static/images/logo/Bootstrap.svg" },
      { name: "WebSocket", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", icon: "/static/images/logo/WebSocket.svg" },
    ]
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "Chart.js", url: "https://www.chartjs.org/", icon: "/static/images/logo/Chartjs.svg" },
      { name: "ApexCharts.js", url: "https://apexcharts.com/", icon: "/static/images/logo/apexchart.png" },
    ]
  },
  {
    title: "Database & Caching",
    skills: [
      { name: "SQLAlchemy", url: "https://www.sqlalchemy.org/", icon: "/static/images/logo/SQLAlchemy.svg" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: "/static/images/logo/PostgreSQL.svg" },
      { name: "MySQL", url: "https://www.mysql.com/", icon: "/static/images/logo/MySQL.svg" },
      { name: "MariaDB", url: "https://mariadb.org/", icon: "/static/images/logo/MariaDB.svg" },
      { name: "SQLite", url: "https://www.sqlite.org/", icon: "/static/images/logo/SQLite.svg" },
      { name: "Redis", url: "https://redis.io/", icon: "/static/images/logo/Redis.svg" },
    ]
  },
  {
    title: "Infrastructure - Deployment & CI/CD",
    skills: [
      { name: "Docker", url: "https://www.docker.com/", icon: "/static/images/logo/Docker.svg" },
      { name: "GitLab CI/CD", url: "https://about.gitlab.com/", icon: "/static/images/logo/GitLab.svg" },
      { name: "Nginx", url: "https://www.nginx.com/", icon: "/static/images/logo/NGINX.svg" },
      { name: "Raspberry Pi", url: "https://www.raspberrypi.com/", icon: "/static/images/logo/Raspberry Pi.svg" },
    ]
  },
  {
    title: "Infrastructure - Development Tools",
    skills: [
      { name: "Git", url: "https://git-scm.com/", icon: "/static/images/logo/Git.svg" },
      { name: "GitHub", url: "https://github.com/", icon: "/static/images/logo/GitHub.svg" },
      { name: "VSCode", url: "https://code.visualstudio.com/", icon: "/static/images/logo/VSCode.svg" },
      { name: "Postman", url: "https://www.postman.com/", icon: "/static/images/logo/Postman.svg" },
      { name: "n8n", url: "https://n8n.io/", icon: "/static/images/logo/n8n.svg" },
      { name: "Jupyter", url: "https://jupyter.org/", icon: "/static/images/logo/Jupyter.svg" },
      { name: "Anaconda", url: "https://anaconda.org/", icon: "/static/images/logo/Anaconda.svg" },
    ]
  },
  {
    title: "Documentation",
    skills: [
      { name: "Markdown", url: "https://www.markdownguide.org/", icon: "/static/images/logo/Markdown.svg" },
    ]
  }
];