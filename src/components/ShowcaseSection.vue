<script setup lang="ts">
  import ShowcaseCard from './ShowcaseCard.vue';
  import type { Project } from '@/types';

  defineProps<{ projects: Project[] }>();
</script>

<template>
  <section id="showcase" class="py-16 mb-12">
    <h2 class="font-lexend text-4xl uppercase pb-2 mb-8 text-slate-900">Showcase</h2>
    <ShowcaseCard 
      v-for="proj in projects" 
      :key="proj.title" 
      :project="proj" 
    />
  </section>
</template>