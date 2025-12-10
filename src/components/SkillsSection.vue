<script setup lang="ts">
  import SkillCard from './SkillCard.vue';
  import type { SkillCategory } from '@/types';

  // Ideally, pass this as a prop from HomeView or import from a data file
  defineProps<{ 
    categories: SkillCategory[],
    concepts: string[] // New prop for the text badges
  }>();
</script>

<template>
  <section id="skills" class="py-16 mb-12">
    <h2 class="font-lexend text-4xl uppercase pb-2 mb-8 text-slate-900">Technical Skills</h2>
    
    <div class="space-y-12">

      <!-- 1. Core Concepts (Badges) -->
      <div>
        <h4 class="text-xl font-bold mb-4 text-slate-900 border-b-2 border-slate-200 pb-2">Core Concepts & Methodologies</h4>
        <div class="flex flex-wrap gap-3 mt-4">
          <span 
            v-for="concept in concepts" 
            :key="concept"
            class="py-1 px-3 bg-blue-200 text-blue-800 text-base font-medium rounded-full">
            {{ concept }}
          </span>
        </div>
      </div>

      <!-- 2. Logo Categories (Cards) -->
      <div v-for="(cat, index) in categories" :key="index">
        <h4 class="text-xl font-bold mb-4 text-slate-900 border-b-2 border-slate-200 pb-2">{{ cat.title }}</h4>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4">
          <SkillCard v-for="skill in cat.skills" :key="skill.name" :skill="skill" />
        </div>
      </div>

    </div>
    
    <!-- Legend -->
    <p class="text-center text-sm text-slate-500 mt-8 italic">
        Gray cards denote prior experience.
    </p>
  </section>
</template>