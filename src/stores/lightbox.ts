import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLightboxStore = defineStore('lightbox', () => {
  const isOpen = ref(false);
  const currentImage = ref('');

  function open(src: string) {
    currentImage.value = src;
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
    currentImage.value = '';
  }

  return { isOpen, currentImage, open, close };
});