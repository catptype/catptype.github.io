<script setup lang="ts">
  defineProps<{
    title: string;
    items?: string[]; // Optional, so we check length before rendering
  }>();
</script>

<template>
  <div v-if="items && items.length > 0" class="mb-4">
    <h4 class="text-lg font-bold mb-2 text-slate-800">{{ title }}</h4>
    <ul class="list-disc list-inside text-slate-600 space-y-2">
      <!-- text-justify ensures long bullets look clean -->
      <li 
        v-for="(item, i) in items" 
        :key="i" 
        v-html="item" 
        class="text-justify"
      ></li>
    </ul>
  </div>
</template>