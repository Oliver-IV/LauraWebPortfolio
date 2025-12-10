<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  category: String
});

const isOpen = ref(false);
</script>

<template>
  <div class="group mb-6">
    <button 
      @click="isOpen = !isOpen" 
      class="w-full relative flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-transparent hover:border-coquette-main shadow-sm hover:shadow-soft transition-all duration-300 z-10"
      :class="{ '!border-coquette-main !bg-pink-50': isOpen }"
    >
      <div class="flex flex-col text-left pl-4">
        <span class="text-xs font-bold tracking-widest text-coquette-dark uppercase mb-1">{{ category }}</span>
        <span class="font-elegant text-3xl text-coquette-accent">{{ title }}</span>
      </div>

      <div 
        class="pr-4 transition-all duration-500 ease-out origin-center" 
        :class="{ 'scale-125 rotate-12': isOpen }"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          class="w-10 h-10 text-coquette-main drop-shadow-sm transition-transform group-hover:scale-110"
        >
          <path d="M12.001 7.002c-1.56 0-2.77-.95-3.52-2.22-.64-1.09-1.89-1.78-3.48-1.78-2.21 0-4 1.79-4 4 0 1.86 1.28 3.41 3.01 3.84L2.24 18.25c-.21.64.26 1.31.93 1.31.42 0 .8-.25.96-.64l1.9-4.74c.25-.03.49-.08.72-.15.42.54 1.07.89 1.8.89 1.08 0 2-.77 2.37-1.78.37 1.01 1.29 1.78 2.37 1.78.73 0 1.38-.35 1.8-.89.23.07.47.12.72.15l1.9 4.74c.16.39.54.64.96.64.67 0 1.14-.67.93-1.31l-1.77-7.39c1.73-.43 3.01-1.98 3.01-3.84 0-2.21-1.79-4-4-4-1.59 0-2.84.69-3.48 1.78-.75 1.27-1.96 2.22-3.52 2.22z" />
        </svg>
      </div>
    </button>
    
    <div 
      class="overflow-hidden transition-[max-height] duration-700 ease-in-out"
      :class="isOpen ? 'max-h-[1200px]' : 'max-h-0'"
    >
      <div 
        class="p-6 mt-[-20px] pt-10 bg-gradient-to-b from-pink-50 to-white rounded-b-3xl border-x border-b border-pink-100 mx-2 shadow-inner"
        v-if="isOpen"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>