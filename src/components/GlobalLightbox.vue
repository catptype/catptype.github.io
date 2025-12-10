<script setup lang="ts">
  import { onUnmounted, onMounted } from 'vue';
  import { useLightboxStore } from '@/stores/lightbox';

  const store = useLightboxStore();

  // Close on 'Esc' key press
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && store.isOpen) {
      store.close();
    }
  };

  onMounted(() => window.addEventListener('keydown', handleKeydown));
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div 
      v-if="store.isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      @click="store.close()"
    >
      <!-- Close Button -->
      <button 
        class="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        @click.stop="store.close()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- The Image -->
      <!-- @click.stop prevents closing when clicking the image itself -->
      <img 
        :src="store.currentImage" 
        class="max-h-full max-w-full rounded-lg shadow-2xl object-contain"
        alt="Enlarged view"
        @click.stop
      />
    </div>
  </Transition>
</template>