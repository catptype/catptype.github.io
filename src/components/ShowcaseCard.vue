<script setup lang="ts">
  import { computed } from 'vue';
  import type { Project } from '@/types';
  import { useLightboxStore } from '@/stores/lightbox';
  import ProjectTags from './ProjectTags.vue';
  import ProjectBulletContent from './ProjectBulletContent.vue';
  import ProjectInfoBlock from './ProjectInfoBlock.vue'; 
  import ProjectVersions from './ProjectVersions.vue'; 

  const props = defineProps<{ project: Project }>();
  const lightbox = useLightboxStore();

  // Dynamic classes based on layout pattern
  const containerClasses = computed(() => {
    switch (props.project.layout) {
      case 'left': return 'flex-col md:flex-row';
      case 'right': return 'flex-col md:flex-row-reverse'; // Swaps order visually
      case 'bottom': return 'flex-col flex-col-reverse';
      case 'none': return 'flex-col';
      default: return 'flex-col';
    }
  });

  const imageContainerWidth = computed(() => {
    if (props.project.layout === 'bottom') return 'w-full mt-6';
    if (props.project.layout === 'none') return 'hidden';
    return 'md:w-2/5 flex-none'; // Left or Right
  });

  const textContainerWidth = computed(() => {
    if (props.project.layout === 'bottom' || props.project.layout === 'none') return 'w-full';
    return 'flex-grow md:w-3/5'; // Left or Right
  });

  const imageGridClasses = computed(() => {
    // Case 1: Bottom Layout (Always a wide grid)
    if (props.project.layout === 'bottom') {
      return 'grid grid-cols-2 md:grid-cols-4 gap-4';
    }
    
    // Case 2: Left/Right Layout WITH Grid enabled (2 columns)
    if (props.project.isGrid) {
      return 'grid grid-cols-2 gap-4';
    }

    // Case 3: Default Left/Right Layout (Vertical Stack)
    return 'flex flex-col space-y-4';
  });

  const tagSections = computed(() => [
    { 
      id: 'stack',
      title: 'Tech Stack', 
      data: props.project.tags.techStack, 
      color: 'bg-blue-100 text-blue-800' 
    },
    { 
      id: 'concepts',
      title: 'Key Concepts & Techniques', 
      data: props.project.tags.concepts, 
      color: 'bg-teal-100 text-teal-800' 
    },
    { 
      id: 'infra',
      title: 'Deployment & Infrastructure', 
      data: props.project.tags.infrastructure, 
      color: 'bg-slate-200 text-slate-800' 
    }
  ]);
</script>

<template>
  <div class="flex gap-8 mb-12 bg-white p-6 rounded-lg border border-slate-200 items-start" :class="containerClasses">
    
    <!-- IMAGES SECTION -->
    <!-- Only render if layout is NOT none. Order is handled by flex-row vs flex-row-reverse parent -->
    <div v-if="project.layout !== 'none'" :class="imageContainerWidth" class="flex flex-col space-y-4">
      <p class="text-center text-sm text-slate-500 italic mt-3">Click an image to view full size.</p>
      
      <!-- Layout Logic for Grid vs Single Column of images -->
      <div :class="imageGridClasses">
         <img 
            v-for="(img, idx) in project.images"
            alt="" 
            :key="idx" 
            :src="img" 
            @click="lightbox.open(img)"
            class="cursor-zoom-in object-cover w-full border border-slate-300 rounded-lg shadow-xl hover:opacity-50 transition"
            :class="{
              'h-[200px]': project.layout === 'bottom',
              'h-[120px]': project.isGrid && project.layout !== 'bottom' // Optional: fix height for uniform grid look
            }" 
         />
      </div>
    </div>

    <!-- TEXT SECTION -->
    <div :class="textContainerWidth">
      
      <!-- NEW: Category Badges -->
      <div class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="cat in project.categories" 
          :key="cat"
          class="inline-block px-2 py-1 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 rounded border border-blue-100"
          v-html="cat">
        </span>
      </div>
      
      <h3 class="text-2xl font-bold font-lexend mb-2 text-slate-900" v-html="project.title"></h3>
      <p class="mb-4 text-slate-700 text-justify" v-html="project.description"></p>

      <!-- Responsibilities (Bullet Pattern) -->
      <ProjectBulletContent 
        title="My Role & Responsibilities:" 
        :items="project.responsibilities" 
      />

      <!-- Key Features (Bullet Pattern) -->
      <ProjectBulletContent 
        title="Key Features & Architecture:" 
        :items="project.features" 
      />

      <ProjectVersions 
        v-if="project.versions" 
        :versions="project.versions" 
      />

      <ProjectInfoBlock 
        v-if="project.infoBlock" 
        :data="project.infoBlock" 
      />

      <!-- Links -->
      <div class="mb-4 flex gap-4">
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="text-base font-semibold text-blue-600 hover:text-blue-700">View Project Details on Github</a>
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="text-base font-semibold text-blue-600 hover:text-blue-700">View Live Demo</a>
      </div>

      <!-- Unified Tags Loop -->
      <ProjectTags
        v-for="section in tagSections"
        :key="section.id"
        :title="section.title"
        :tags="section.data"
        :color="section.color"
      />
      
    </div>

  </div>
</template>