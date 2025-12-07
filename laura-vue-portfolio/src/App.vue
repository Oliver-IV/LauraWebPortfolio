<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeroSection from './components/HeroSection.vue';
import ResumeSection from './components/ResumeSection.vue';
import Accordion from './components/ui/Accordion.vue';
import PhotoCarousel from './components/ui/PhotoCarousel.vue';
import ContactSection from './components/ContactSection.vue';
import Navbar from './components/Navbar.vue';
import { portfolioCategories } from './data/PortfolioCategorioes.js';

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
  <main class="min-h-screen pb-20 selection:bg-coquette-main selection:text-white">
    
    <Navbar />

    <div id="hero" class="pt-28 scroll-mt-24">
      <HeroSection />
    </div>

    <section id="gallery" class="max-w-4xl mx-auto px-4 mt-20 scroll-mt-28">
      <div class="text-center mb-16">
        <div class="inline-block p-2 px-6 border border-coquette-main/30 rounded-full bg-white/40 backdrop-blur-sm mb-4">
          <p class="text-coquette-dark font-fancy text-xl tracking-wide">~ selected works ~</p>
        </div>
        <h2 class="font-elegant text-5xl md:text-6xl text-coquette-accent mb-2">Gallery Collection</h2>
        <div class="w-24 h-1 bg-coquette-main mx-auto rounded-full mt-4 opacity-50"></div>
      </div>

      <div v-for="item in portfolioCategories" :key="item.id">
        <Accordion :title="item.title" :category="item.category">
          <PhotoCarousel :images="item.images" />
        </Accordion>
      </div>
    </section>

    <div id="resume" class="scroll-mt-20">
      <ResumeSection />
    </div>

    <div id="contact" class="scroll-mt-20">
      <ContactSection />
    </div>

    <footer class="text-center py-10 text-gray-400 text-sm">
      <p>© 2025 Laura Inzunza Photography</p>
    </footer>
  </main>
</template>