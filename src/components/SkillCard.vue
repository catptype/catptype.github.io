<script setup lang="ts">
  import type { SkillCard } from '@/types';
  defineProps<{ skill: SkillCard }>();
</script>

<template>
  <a :href="skill.url" target="_blank" 
    class="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 shadow-sm"
    :class="[
      skill.prior 
        ? 'bg-slate-200 text-slate-500 cursor-default' 
        : 'bg-white text-slate-700 hover:shadow-lg hover:scale-105 cursor-pointer transition-all'
    ]">
    <img :src="skill.icon" :alt="skill.name" class="w-10 h-10">
    <span class="mt-2 text-sm font-medium text-slate-700 text-center">{{ skill.name }}</span>
  </a>
</template>