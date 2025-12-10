<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import Introduction from '@/components/Introduction.vue';
  import SkillsSection from '@/components/SkillsSection.vue';
  import ShowcaseSection from '@/components/ShowcaseSection.vue';
  import ContactSection from '@/components/ContactSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  import GlobalLightbox from '@/components/GlobalLightbox.vue';

  // Import data (assuming you created src/data/content.ts or similar)
  // You can also inline the data here for testing
  import { skillCategories, coreConcepts } from '@/data/skills';
  import { projects } from '@/data/showcases/index';
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>

<template>
  <div class="max-w-6xl mx-auto px-4 font-inter bg-slate-50 text-slate-800">
    <NavBar />
    <Introduction />
    <SkillsSection :categories="skillCategories" :concepts="coreConcepts" />
    <ShowcaseSection :projects="projects" />
    <ContactSection />
    <FooterSection />
    <GlobalLightbox />
  </div>
</template>

