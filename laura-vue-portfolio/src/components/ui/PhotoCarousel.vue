<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1;
};

const selectImage = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="flex flex-col gap-6 w-auto -mx-4 md:w-full md:mx-auto max-w-4xl">
    
    <div class="relative w-full rounded-3xl overflow-hidden shadow-xl group border-4 border-white bg-white">
      
      <div 
        class="flex transition-transform duration-700 ease-out" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)`, willChange: 'transform' }"
      >
        <div v-for="(item, index) in images" :key="index" class="min-w-full relative">
          <img 
            :src="item.main" 
            class="w-full h-[400px] md:h-[500px] object-cover" 
            alt="Portfolio Highlight" 
          />
          <div class="absolute inset-0 bg-coquette-main mix-blend-overlay opacity-10 pointer-events-none"></div>
        </div>
      </div>
      
      <button 
        @click="prev" 
        class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 backdrop-blur-sm hover:bg-white text-coquette-accent rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
      >
        <i class="fa-solid fa-chevron-left text-lg"></i>
      </button>
      
      <button 
        @click="next" 
        class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 backdrop-blur-sm hover:bg-white text-coquette-accent rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
      >
        <i class="fa-solid fa-chevron-right text-lg"></i>
      </button>
    </div>

    <div class="px-2">
      <div class="flex justify-center gap-3 flex-wrap">
        <button 
          v-for="(item, index) in images" 
          :key="'thumb-'+index"
          @click="selectImage(index)"
          class="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 ease-in-out border-2"
          :class="[
            currentIndex === index 
              ? 'border-coquette-main scale-110 shadow-glow ring-2 ring-pink-100 ring-offset-2' 
              : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
          ]"
        >
          <img 
            :src="item.thumb" 
            class="w-full h-full object-cover" 
            alt="Thumbnail" 
          />
          
          <div v-if="currentIndex === index" class="absolute inset-0 bg-coquette-main/20">
            <i class="fa-solid fa-heart text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md text-sm"></i>
          </div>
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.thumbnails-scroll::-webkit-scrollbar {
  height: 6px;
}
.thumbnails-scroll::-webkit-scrollbar-thumb {
  background: var(--color-pink-main);
  border-radius: 10px;
}
</style>