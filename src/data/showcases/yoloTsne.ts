import type { Project } from '@/types';

export const tsne: Project = {
  title: "YOLO Dataset Auditor & Visualizer",
  layout: "left",
  description: "I developed this open&#8209;source Python toolkit to solve two critical problems in the AI workflow: finding labeling errors in large datasets and understanding why a model makes its decisions. The tool uses a YOLO model to analyze images, applies machine learning to pinpoint mislabeled data, and generates high&#8209;fidelity heatmaps to reveal the model's internal logic.",

  features: [
    {
      label: "2D & 3D Dataset Health Check",
      text: "The tool generates interactive maps of the entire dataset in both 2D and 3D, grouping similar images into colored clusters. This allows developers to rotate and explore the data from different angles to find hidden patterns and instantly see its overall health."
    },
    {
      label: "Error Highlighting",
      text: "To make finding errors effortless, I designed a Ghost Mode that makes all correctly labeled data points faint and transparent. This causes the few mislabeled data points to stand out as bright, obvious errors in both the 2D and 3D views."
    },
    {
      label: "Model Interpretability with Heatmaps",
      text: "To help developers understand why a model makes its decisions, I developed a feature to generate high&#8209;resolution heatmaps. These visualizations show exactly which pixels the AI is focusing on, providing a clear tool for debugging and building trust in the model."
    },
    {
      label: "Automatic To&#8209;Do List for Fixing Errors",
      text: "After the analysis, the tool automatically generates a simple CSV file that acts as a to&#8209;do list. It lists every suspicious image, its current label, and what the correct label should be, making the cleaning process fast and efficient."
    },
    {
      label: "Built for Massive Datasets",
      text: "The tool was designed to be robust. It automatically saves its progress, so if it is interrupted while processing a huge dataset of over 100,000 images, it can be restarted and will resume exactly where it left off without losing any work."
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