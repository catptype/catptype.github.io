<script setup lang="ts">
  import { computed } from 'vue';
  import type { Project } from '@/types';
  import { useLightboxStore } from '@/stores/lightbox';

  const props = defineProps<{ project: Project }>();
  const lightbox = useLightboxStore();

  // Dynamic classes based on layout pattern
  const containerClasses = computed(() => {
    switch (props.project.layout) {
      case 'left': return 'flex-col md:flex-row';
      case 'right': return 'flex-col md:flex-row-reverse'; // Swaps order visually
      case 'bottom': return 'flex-col';
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
</script>

<template>
  <div class="flex gap-8 mb-12 bg-white p-6 rounded-lg border border-slate-200 items-start" :class="containerClasses">
    
    <!-- IMAGES SECTION -->
    <!-- Only render if layout is NOT none. Order is handled by flex-row vs flex-row-reverse parent -->
    <div v-if="project.layout !== 'none'" :class="imageContainerWidth" class="flex flex-col space-y-4">
      <p class="text-center text-sm text-slate-500 italic mt-3">Click an image to view full size.</p>
      
      <!-- Layout Logic for Grid vs Single Column of images -->
      <div :class="project.layout === 'bottom' ? 'grid grid-cols-2 md:grid-cols-4 gap-4' : 'flex flex-col space-y-4'">
         <img 
            v-for="(img, idx) in project.images"
            alt="" 
            :key="idx" 
            :src="img" 
            @click="lightbox.open(img)"
            class="cursor-zoom-in object-cover w-full border border-slate-300 rounded-lg shadow-xl hover:opacity-90 transition"
            :class="{'h-[200px]': project.layout === 'bottom'}" 
         />
      </div>
    </div>

    <!-- TEXT SECTION -->
    <div :class="textContainerWidth">
      <h3 class="text-2xl font-bold font-lexend mb-2 text-slate-900" v-html="project.title"></h3>
      <p class="mb-4 text-slate-700 text-justify" v-html="project.description"></p>

      <!-- Responsibilities -->
      <div v-if="project.responsibilities" class="mb-4">
        <h4 class="text-lg font-semibold mb-2 text-slate-800">My Role & Responsibilities:</h4>
        <ul class="list-disc list-inside text-slate-600 space-y-2">
          <li v-for="(res, i) in project.responsibilities" :key="i" v-html="res"></li>
        </ul>
      </div>

      <!-- Key Features -->
      <div v-if="project.features" class="mb-4">
        <h4 class="text-lg font-semibold mb-2 text-slate-800">Key Features & Architecture:</h4>
        <ul class="list-disc list-inside text-slate-600 space-y-2">
          <li v-for="(fea, i) in project.features" :key="i" v-html="fea"></li>
        </ul>
      </div>

      <!-- Links -->
      <div class="mb-4 flex gap-4">
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="text-base font-semibold text-blue-600 hover:text-blue-700">View Project Details on Github</a>
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="text-base font-semibold text-blue-600 hover:text-blue-700">View Live Demo</a>
      </div>

      <!-- Tech Stack -->
      <div v-if="project.techStack" class="mt-4">
        <h5 class="text-sm font-semibold mb-2 text-slate-600">Tech Stack</h5>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in project.techStack" 
            :key="tech" 
            class="py-1 px-3 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
            v-html="tech">
          </span>
        </div>
      </div>

      <!-- Key Concepts & Techniques -->
      <div v-if="project.keyConcepts" class="mt-4">
        <h5 class="text-sm font-semibold mb-2 text-slate-600">Key Concepts & Techniques</h5>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="concept in project.keyConcepts" 
            :key="concept" 
            class="py-1 px-3 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
            v-html="concept">
          </span>
        </div>
      </div>

      <!-- Deployment & Infrastructure -->
      <div v-if="project.deploy" class="mt-4">
        <h5 class="text-sm font-semibold mb-2 text-slate-600">Deployment & Infrastructure</h5>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="deploy in project.deploy" 
            :key="deploy" 
            class="py-1 px-3 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
            v-html="deploy">
          </span>
        </div>
      </div>
      
    </div>

  </div>
</template>