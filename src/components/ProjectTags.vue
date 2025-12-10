<script setup lang="ts">
defineProps<{
  title: string;
  tags?: string[]; // Optional: implies it might be undefined
  color: string;   // Expecting Tailwind classes like 'bg-blue-100 text-blue-800'
}>();
</script>

<template>
  <div v-if="tags && tags.length > 0" class="mt-4">
    <h5 class="text-sm font-semibold mb-2 text-slate-600">{{ title }}</h5>
    <div class="flex flex-wrap gap-2">
      <span 
        v-for="tag in tags" 
        :key="tag" 
        class="py-1 px-3 text-sm font-medium rounded-full"
        :class="color"
        v-html="tag"
      ></span>
    </div>
  </div>
</template>