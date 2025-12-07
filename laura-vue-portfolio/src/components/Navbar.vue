<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { navLinks } from '../data/NavLinks.js';

const activeSection = ref('hero');
let observer = null;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4 
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  navLinks.forEach((link) => {
    const element = document.getElementById(link.id);
    if (element) observer.observe(element);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <nav class="w-full fixed top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      
      <a href="#hero" class="group flex items-center gap-2">
        <span class="text-2xl pt-1">🎀</span>
        <span class="font-fancy text-2xl md:text-3xl text-coquette-accent drop-shadow-sm group-hover:text-coquette-main transition-colors duration-300">
          Laura's Lens
        </span>
      </a>

      <ul class="flex items-center gap-2 md:gap-6 bg-pink-50/50 md:bg-transparent px-4 py-2 rounded-full border border-pink-100 md:border-none">
        
        <li v-for="link in navLinks" :key="link.name">
          <a 
            :href="link.href" 
            class="relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group"
            :class="activeSection === link.id 
              ? 'bg-coquette-main text-white shadow-md transform scale-105' 
              : 'text-gray-500 hover:bg-pink-100 hover:text-coquette-accent'"
          >
            <i :class="link.icon" class="text-lg"></i>
            
            <span class="hidden md:block font-body text-xs font-bold uppercase tracking-widest">
              {{ link.name }}
            </span>
          </a>
        </li>

      </ul>
    </div>
  </nav>
</template>