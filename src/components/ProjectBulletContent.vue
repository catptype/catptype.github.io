<script setup lang="ts">
  import type { BulletItem } from '@/types';

  defineProps<{
    title: string;
    items?: BulletItem[];
  }>();
</script>

<template>
  <div v-if="items && items.length > 0" class="mb-4">
    <h4 class="text-lg font-bold mb-2 text-slate-800">{{ title }}</h4>
    <ul class="list-disc list-inside text-slate-600 space-y-2">
      <li 
        v-for="(item, i) in items" 
        :key="i">
        <strong v-html="item.label+`:&nbsp;`"></strong>
        <span v-html="item.text"></span>
      </li>
    </ul>
  </div>
</template>