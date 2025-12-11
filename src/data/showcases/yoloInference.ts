import type { Project } from '@/types';

export const yoloInference: Project = {
  title: "YOLO Inference Toolkit",
  categories: ["AI", "Open-Source", "Tools"],
  layout: "left",
  description: "An open&#8209;source, object&#8209;oriented toolkit designed to streamline the developer experience for the <strong>Ultralytics YOLO</strong> framework. This API wrapper abstracts away boilerplate code, enforcing a consistent predict&#8209;then&#8209;decode software pattern across all computer vision tasks. The architecture promotes code reusability and delivers simplified, application&#8209;ready data payloads, enabling developers to accelerate the integration of AI models into their projects.",

  features: [
    {
      label: "Universal YOLO Support",
      text: "Designed with a model&#8209;agnostic architecture that provides a unified API for all major YOLO tasks, including <strong>classification, object detection, instance segmentation, and pose estimation</strong>."
    },
    {
      label: "Object-Oriented Architecture",
      text: "Built on a logical, inheritable class structure that maximizes code reuse and provides a clean, extensible foundation for custom implementations, showcasing a strong software design pattern."
    },
    {
      label: "Consistent Predict → Decode Workflow",
      text: "Enforces a clear two&#8209;step pattern that decouples model inference from results parsing. This improves code readability and makes batch processing workflows intuitive and efficient."
    },
    {
      label: "Application-Ready Data",
      text: "All methods are engineered to return simplified, native Python data structures (lists, tuples), eliminating the need to parse complex framework objects and making results immediately usable."
    },
    {
      label: "Built-in Advanced Utilities",
      text: "Includes pre&#8209;built functionalities for common downstream tasks, such as stateful <strong>object tracking</strong> and helper methods for cropping and extracting detected or segmented objects."
    }
  ],
  tags: {
    techStack: [
      "Python", "Ultralytics", "Supervision",
    ],
    concepts: [
      "Object&#8209;Oriented Programming", "API Design", "Developer Tool", "Software Design Patterns"
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