import type { Project } from '@/types';

export const tsne: Project = {
  title: "YOLO Dataset Auditor & Visualizer",
  categories: ["AI", "Open-Source", "Tools"],
  layout: "left",
  description: "An open&#8209;source auditing suite designed to optimize computer vision workflows. Utilizes <strong>Ultralytics YOLO</strong> models and dimensionality reduction (t&#8209;SNE) to visualize dataset clusters, automatically detect labeling anomalies, and provide model interpretability via high&#8209;fidelity heatmaps.",

  features: [
    {
      label: "Interactive 2D & 3D Visualization",
      text: "Generates interactive scatter plots that project high&#8209;dimensional feature vectors into 2D and 3D space, enabling developers to visually assess dataset distribution, identify class overlap, and detect outliers.",
    },
    {
      label: "Algorithmic Error Detection",
      text: "Integrated a <strong>k&#8209;Nearest Neighbors (k&#8209;NN)</strong> algorithm to statistically identify class conflicts. Implemented a dynamic rendering technique using <strong>opacity modulation</strong> to visually suppress consistent clusters while emphasizing high&#8209;conflict data points for immediate QA.",
    },
    {
      label: "Explainable AI (XAI)",
      text: "Provides deep model interpretability through high&#8209;resolution <strong>Feature Activation Mapping</strong>. Visualizes pixel&#8209;level spatial attention by aggregating neural responses across convolutional layers, revealing exactly which image regions are triggering the model's focus.",
    },
    {
      label: "Actionable Reporting",
      text: "Streamlines data cleaning by converting statistical analysis into prioritized CSV checklists. Automatically flags conflicting images and suggests corrections based on cluster proximity.",
    },
    {
      label: "Scalable Architecture",
      text: "Engineered for robust performance on massive datasets (100k+ images). Features an <strong>interrupt&#8209;safe caching system</strong> that preserves processing state, allowing workflows to resume seamlessly without data loss.",
    },
  ],
  tags: {
    techStack: [
      "Python", "Ultralytics", "Scikit&#8209;learn", "Plotly",
    ],
    concepts: [
      "Developer Tool", "Software Architecture", "Data Visualization (2D & 3D)"
    ],
  },
  
  githubUrl: "https://github.com/catptype/YOLO-tSNE-Visualizer",
  isGrid: true,
  images: [
    "/static/images/tsne_project/screenshot1.png",
    "/static/images/tsne_project/screenshot2.png",
    "/static/images/tsne_project/screenshot3.png",
    "/static/images/tsne_project/screenshot4.png",
    "/static/images/tsne_project/screenshot5.png",
    "/static/images/tsne_project/screenshot6.png",
    "/static/images/tsne_project/screenshot7.png",
  ]
}