<script setup lang="ts">
  import type { InfoBlock } from '@/types';

  defineProps<{
    data: InfoBlock;
  }>();
</script>

<template>
  <div class="mb-4">
    <h4 class="text-lg font-semibold mb-2 text-slate-800">{{ data.title }}</h4>
    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
      <p class="text-slate-700 text-justify text-sm" v-html="data.description"></p>
      
      <a 
        v-if="data.url" 
        :href="data.url" 
        target="_blank" 
        class="inline-block mt-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        {{ data.linkText || 'View Details' }} &rarr;
      </a>
    </div>
  </div>
</template>