import type { Project } from '@/types';

export const deeplearning: Project = {
  title: "Foundational Deep Learning: From Papers to Code",
  categories: ["AI"],
  layout: "none",
  description: "An extensive code library implementing seminal computer vision research papers from scratch using <strong>TensorFlow</strong> and <strong>Keras</strong>. This project demonstrates the ability to deconstruct complex academic literature and translate theoretical concepts into a modular, object&#8209;oriented codebase, bridging the gap between theory and practical application.",

  features: [
    {
      label: "CNN Implementation from First Principles",
      text: "Recreated seminal CNN architectures (VGG, ResNet, DenseNet, etc.) directly from academic papers, focusing on building a robust, object&#8209;oriented class structure for each model family."
    },
    {
      label: "Modern Transformer Architectures",
      text: "Implemented modern attention&#8209;based models for vision, including <strong>Vision Transformer (ViT)</strong> and its more efficient variants (CCT, CVT), demonstrating an understanding of current state&#8209;of&#8209;the&#8209;art techniques."
    },
    {
      label: "Object Detection Core Mechanics",
      text: "Engineered the fundamental components of a single&#8209;shot detector by implementing the <strong>YOLOv3 model and its specialized loss function</strong> from scratch, showcasing a deep understanding of object detection mechanics."
    },
    {
      label: "Extensible & Modular Design",
      text: "Designed the library to be easily extensible, incorporating advanced modules like <strong>SE blocks and CBAM</strong> that can be plugged into various base architectures to enhance their performance."
    },
    {
      label: "End&#8209;to&#8209;End Application Development",
      text: "Validated the implemented models by building practical, end&#8209;to&#8209;end applications, including an image similarity search engine, an automated image organizer, and a manga dialogue detector with OCR."
    },
  ],
  tags: {
    techStack: [
      "Python", "TensorFlow", "Keras",
    ],
    concepts: [
      "Object&#8209;Oriented Design",
      "Computer Vision Fundamentals", 
      "Implementation from Research Paper"
    ],
  },
  
  githubUrl: "https://github.com/catptype/Deep-Learning-for-Computer-Vision",
}