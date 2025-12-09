import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State (ref)
  const count = ref(0)

  // Getters (computed)
  const doubleCount = computed(() => count.value * 2)

  // Actions (function)
  function increment() {
    count.value++
  }

  function reset() {
    count.value = 0
  }

  // Don't forget to return everything you want to expose
  return { count, doubleCount, increment, reset }
})