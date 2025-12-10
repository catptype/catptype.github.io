<script setup lang="ts">
  import { ref, computed } from 'vue';
  import ShowcaseCard from './ShowcaseCard.vue';
  import type { Project, ProjectCategory } from '@/types';

  const props = defineProps<{ projects: Project[] }>();
  type FilterType = 'All' | ProjectCategory;
  const activeCategory = ref<FilterType>('All');
  const filters: FilterType[] = ['All', 'AI', 'Full-Stack', 'Backend', 'Frontend', 'Tools', 'Open-Source'];

  const filteredProjects = computed(() => {
    // 1. If 'All' is selected, return everything
    if (activeCategory.value === 'All') {
      return props.projects;
    }
    
    // 2. Otherwise, check if the project's categories array INCLUDES the active filter
    return props.projects.filter(project => 
      project.categories.includes(activeCategory.value as ProjectCategory)
    );
  });
</script>

<template>
  <section id="showcase" class="py-16 mb-12">
    <div class="flex flex-col md:flex-row justify-between items-end mb-8">
      <h2 class="font-lexend text-4xl uppercase pb-2 text-slate-900">Showcase</h2>
      
      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-2 mt-4 md:mt-0">
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="activeCategory = filter"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all border"
          :class="activeCategory === filter 
            ? 'bg-slate-800 text-white border-slate-800 shadow-md' 
            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    <!-- Project List with Animation -->
    <div class="space-y-12">
      <TransitionGroup name="list">
        <ShowcaseCard 
          v-for="proj in filteredProjects" 
          :key="proj.title" 
          :project="proj" 
        />
      </TransitionGroup>
      
      <!-- Empty State (Just in case) -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12 text-slate-500 italic">
        No projects found in this category.
      </div>
    </div>
  </section>
</template>

<style>
/* Smooth filtering animation */
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* ensure leaving items are taken out of layout flow so others move smoothly */
.list-leave-active {
  position: absolute; 
  width: 100%;
}
</style>