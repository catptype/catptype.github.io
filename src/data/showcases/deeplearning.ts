import type { Project } from '@/types';

export const deeplearning: Project = {
  title: "Foundational Deep Learning: From Papers to Code",
  layout: "none",
  description: "This project is the detailed record of my self&#8209;study journey into the foundations of modern computer vision. To bridge the gap from theory to practice, I dedicated myself to implementing seminal deep learning research papers from scratch using TensorFlow and Keras. This repository showcases my ability to dissect, understand, and build complex AI architectures based on academic literature.",

  features: [
    {
      label: "Classic CNN Architectures",
      text: "Implemented a wide range of foundational models, including VGG, GoogLeNet (InceptionV1), ResNet, SqueezeNet, DenseNet, ResNeXt, and Res2Net."
    },
    {
      label: "Vision Transformer (ViT) Models",
      text: "Explored the transformer architecture for vision tasks by implementing ViT, Compact Convolutional Transformer (CCT), and Compact Vision Transformer (CVT)."
    },
    {
      label: "Object Detection Fundamentals",
      text: "Built the core components of YOLOv3, including its specialized loss function, to understand the mechanics of single&#8209;shot object detectors."
    },
    {
      label: "Practical Applications",
      text: "Applied these foundational models to build practical tools, including an image similarity search engine, an automatic image organizer, and a manga dialogue detector with OCR."
    },
  ],
  tags: {
    techStack: [
      "Python", "TensorFlow", "Keras",
    ],
    concepts: [
      "Self Learning", "API Design", "Deep Learning Fundamentals", "Implementation from Scratch"
    ],
  },
  
  githubUrl: "https://github.com/catptype/Deep-Learning-for-Computer-Vision",
}