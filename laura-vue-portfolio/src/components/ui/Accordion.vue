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

      <div class="pr-4 transition-transform duration-500" :class="{ 'rotate-180': isOpen }">
        <i class="fa-solid fa-ribbon text-3xl text-coquette-main group-hover:scale-110 transition-transform"></i>
      </div>
    </button>
    
    <div 
      class="overflow-hidden transition-[max-height] duration-700 ease-in-out"
      :class="isOpen ? 'max-h-[1200px]' : 'max-h-0'"
    >
      <div class="p-6 mt-[-20px] pt-10 bg-gradient-to-b from-pink-50 to-white rounded-b-3xl border-x border-b border-pink-100 mx-2 shadow-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>