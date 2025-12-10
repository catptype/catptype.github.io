<script setup lang="ts">
import type { ProjectVersion } from '@/types';

defineProps<{
  versions: ProjectVersion[];
}>();
</script>

<template>
  <div class="mb-6">
    <h4 class="text-lg font-semibold mb-2 text-slate-800">A Tale of Two Architectures:</h4>
    
    <!-- Loop through Versions (Monolith -> Decoupled) -->
    <div 
      v-for="(version, idx) in versions" 
      :key="idx"
      class="mb-6 border-l-4 border-slate-200 pl-4 py-2"
    >
      <!-- Title & Description -->
      <h5 class="font-semibold text-slate-800 mb-2" v-html="version.title"></h5>
      <p class="text-sm text-slate-600 mb-2" v-html="version.description"></p>
      
      <!-- Links -->
      <div class="mb-4">
        <a v-if="version.liveUrl" :href="version.liveUrl" target="_blank" class="text-sm font-semibold text-blue-600 hover:text-blue-700 block mb-1">View Live Demo</a>
        <a v-if="version.githubUrl" :href="version.githubUrl" target="_blank" class="text-sm font-semibold text-blue-600 hover:text-blue-700 block">View Project Details on Github</a>
      </div>

      <!-- Tech Stacks (Flexible List) -->
      <div class="space-y-3">
        <div 
          v-for="stack in version.techStack" 
          :key="stack.label"
          class="bg-slate-50 p-3 rounded-lg border border-slate-200"
        >
          <!-- Custom Label For Tech Stack-->
          <h6 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2" v-html="stack.label">
          </h6>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in stack.tags" 
              :key="tag" 
              class="py-1 px-3 text-sm font-medium rounded-full bg-blue-100 text-blue-800" v-html="tag">
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>