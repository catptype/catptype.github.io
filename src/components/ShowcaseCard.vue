<script setup lang="ts">
  import { ref, computed } from 'vue';
  import type { Project } from '@/types';
  import { useLightboxStore } from '@/stores/lightbox';
  import ProjectTags from './ProjectTags.vue';
  import ProjectBulletContent from './ProjectBulletContent.vue';
  import ProjectInfoBlock from './ProjectInfoBlock.vue'; 
  import ProjectVersions from './ProjectVersions.vue'; 

  const props = defineProps<{ project: Project }>();
  const lightbox = useLightboxStore();

  // === STATE ===
  const isExpanded = ref(false);

  // === MINI CARD LOGIC ===
  // Combine all tags into one list for the preview, limit to 5
  const previewTags = computed(() => {
    const t = props.project.tags;
    const all = [
      ...(t.techStack || []),
      ...(t.concepts || []),
      ...(t.infrastructure || [])
    ];
    return all.slice(0, 5); // Show only first 5 tags
  });

  const remainingTagsCount = computed(() => {
    const t = props.project.tags;
    const total = (t.techStack?.length || 0) + (t.concepts?.length || 0) + (t.infrastructure?.length || 0);
    return total - 5;
  });

  // === FULL CARD LOGIC ===
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
  <!-- Card Container: Smooth transition for height/size changes -->
  <div 
    class="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300 ease-in-out"
    :class="[
      isExpanded ? 'p-6 mb-12 shadow-lg ring-1 ring-blue-100' : 'p-0 mb-6 shadow-sm hover:shadow-md cursor-pointer group'
    ]"
    @click="!isExpanded && (isExpanded = true)"
  >
    
    <!-- ==================== VIEW 1: MINI CARD (COLLAPSED) ==================== -->
    <div v-if="!isExpanded" class="flex flex-col md:flex-row h-full">
      
      <!-- Cover Image (First screenshot) -->
      <div class="md:w-1/4 h-48 md:h-auto relative overflow-hidden bg-slate-100">
        <img 
          v-if="project.images && project.images.length > 0"
          :src="project.images[0]" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt="Project Cover" 
        />
        <!-- Overlay hint -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
      </div>

      <!-- Summary Content -->
      <div class="p-6 md:w-3/4 flex flex-col justify-between">
        <div>
          <!-- Category Badges -->
          <div class="flex flex-wrap gap-2 mb-2">
            <span v-for="cat in project.categories" :key="cat" class="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-1 rounded">
              {{ cat }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-slate-900 mb-2 font-lexend group-hover:text-blue-600 transition-colors" v-html="project.title"></h3>
          
          <!-- Description-->
          <div class="text-slate-600 text-sm mb-4 text-justify" v-html="project.description"></div>

          <!-- Preview Tags -->
          <div class="flex flex-wrap gap-2">
             <span 
               v-for="tag in previewTags" 
               :key="tag" 
               class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full border border-slate-200"
               v-html="tag"
             ></span>
             <span v-if="remainingTagsCount > 0" class="text-xs text-slate-400 py-1 px-2">
               +{{ remainingTagsCount }} more
             </span>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-4 flex items-center text-blue-600 font-semibold text-sm">
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>


    <!-- ==================== VIEW 2: FULL CARD (EXPANDED) ==================== -->
    <div v-else class="animate-fade-in">
      
      <!-- Close / Collapse Button (Sticky inside the card) -->
      <div class="flex justify-end mb-4">
        <button 
          @click.stop="isExpanded = false" 
          class="flex items-center text-sm text-slate-500 hover:text-red-600 transition-colors px-3 py-1 rounded-full hover:bg-red-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
          Collapse Card
        </button>
      </div>

      <!-- (YOUR ORIGINAL COMPLEX LAYOUT CODE) -->
      <div class="flex gap-8 items-start" :class="containerClasses">
        
        <!-- IMAGES SECTION -->
        <div v-if="project.layout !== 'none'" :class="imageContainerWidth" class="flex flex-col space-y-4">
          <p class="text-center text-sm text-slate-500 italic mt-3">Click an image to view full size.</p>
          <div :class="imageGridClasses">
            <img 
                v-for="(img, idx) in project.images"
                :key="idx" 
                :src="img" 
                alt=""
                @click="lightbox.open(img)"
                class="cursor-zoom-in object-cover w-full border border-slate-300 rounded-lg shadow-xl hover:opacity-50 transition"
                :class="{
                  'h-[200px]': project.layout === 'bottom',
                  'h-[120px]': project.isGrid && project.layout !== 'bottom'
                }" 
            />
          </div>
        </div>

        <!-- TEXT SECTION -->
        <div :class="textContainerWidth">
          <!-- Categories -->
          <div class="flex flex-wrap gap-2 mb-3">
            <span v-for="cat in project.categories" :key="cat" class="inline-block px-2 py-1 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 rounded border border-blue-100">
              {{ cat }}
            </span>
          </div>

          <h3 class="text-2xl font-bold font-lexend mb-2 text-slate-900" v-html="project.title"></h3>
          <p class="mb-4 text-slate-700 text-justify" v-html="project.description"></p>

          <ProjectVersions v-if="project.versions" :versions="project.versions" />
          <ProjectBulletContent title="My Role & Responsibilities:" :items="project.responsibilities" />
          <ProjectBulletContent title="Key Features & Architecture:" :items="project.features" />
          
          <ProjectInfoBlock v-if="project.infoBlock" :data="project.infoBlock" />

          <div class="mb-4 flex gap-4">
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="text-base font-semibold text-blue-600 hover:text-blue-700">View Project Details on Github</a>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="text-base font-semibold text-blue-600 hover:text-blue-700">View Live Demo</a>
          </div>

          <ProjectTags
            v-for="section in tagSections"
            :key="section.id"
            :title="section.title"
            :tags="section.data"
            :color="section.color"
          />
        </div>
      </div>
      
      <!-- Bottom Collapse Button (For convenience on long cards) -->
      <div class="mt-8 pt-4 border-t border-slate-100 flex justify-center">
        <button 
          @click.stop="isExpanded = false" 
          class="flex items-center text-slate-500 hover:text-blue-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
          Show Less
        </button>
      </div>

    </div>

  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>