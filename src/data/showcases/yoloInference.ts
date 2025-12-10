import type { Project } from '@/types';

export const yoloInference: Project = {
  title: "YOLO Inference Toolkit",
  layout: "bottom",
  description: "I developed this open-source toolkit to solve a common problem for AI developers: the repetitive setup code and complexity of using the powerful Ultralytics YOLO framework. To simplify this, I built a set of intuitive, object-oriented Python classes that provide a clean and consistent workflow for every task. This lets developers get useful, ready-to-use data with a simple predict-then-decode process. The goal is to help developers move from idea to implementation much faster by focusing on their application, not the framework's internal details.",

  features: [
    {
      label: "Simplify Developer Experience",
      text: "Abstract away complex framework internals and provide a simple, intuitive API for common AI tasks."
    },
    {
      label: "Promote Code Reusability",
      text: "Use an object-oriented inheritance structure to prevent code duplication and make the toolkit easy to extend."
    },
    {
      label: "Provide Predictable Data",
      text: "Ensure all decode methods return simple, clean Python data structures (lists, tuples), not complex objects."
    },
    {
      label: "Ensure Versatility",
      text: "Design a model-agnostic tool that works seamlessly for classification, detection, segmentation, and pose estimation."
    },
    {
      label: "Model-Agnostic Design",
      text: "Works with any model type supported by the Ultralytics framework, including classification, detection, segmentation, and pose estimation."
    },
    {
      label: "Simplified Data Output",
      text: "All decode methods are designed to return simple Python data structures (lists and tuples), not complex framework objects, making the results immediately usable."
    },
    {
      label: "Consistent Predict → Decode Pattern",
      text: "The entire inference process is streamlined into two clear steps that work identically for both single images and batches."
    },
    {
      label: "Specialized Task Capabilities",
      text: "Includes ready-to-use methods for advanced tasks like stateful object tracking and utilities to easily extract detected or segmented objects from an image."
    }
  ],
  tags: {
    techStack: [
      "Python", "Ultralytics", "Supervision",
    ],
    concepts: [
      "Object-Oriented Programming", "API Design", "Developer Tool", "Software Architecture"
    ],
  },
  
  githubUrl: "https://github.com/catptype/YOLO-Inference-Toolkit",
  isGrid: true,
  images: [
    "/static/images/yolo_inference/Classification-Single.png",
    "/static/images/yolo_inference/Classification-Batch.png",
    "/static/images/yolo_inference/Detection-Single.png",
    "/static/images/yolo_inference/Detection-Batch.png",
    "/static/images/yolo_inference/Segmentation-Single.png",
    "/static/images/yolo_inference/Segmentation-Batch.png",
    "/static/images/yolo_inference/Pose-Single.png",
    "/static/images/yolo_inference/Pose-Batch.png",
  ]
}