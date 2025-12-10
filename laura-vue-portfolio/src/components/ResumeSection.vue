<template>
  <section class="py-20 flex justify-center px-4">
    <div class="relative bg-white w-full max-w-2xl p-10 md:p-14 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 rounded-sm">
      
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-coquette-main/80 rotate-[-2deg] shadow-sm backdrop-blur-sm"></div>

      <div class="text-center mb-10 border-b-2 border-dashed border-pink-100 pb-8">
        <h2 class="font-fancy text-5xl text-coquette-accent mb-4">Resume</h2>
      </div>

      <div class="space-y-8 font-body text-gray-600">
        <div class="group hover:translate-x-2 transition-transform duration-300">
          <h3 class="font-bold text-coquette-accent uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap text-pink-300"></i> Education
          </h3>
          <p class="text-lg font-medium">High School Senior - Photography Major</p>
          <p class="text-sm text-pink-400">2021 - Present</p>
        </div>

        <div class="group hover:translate-x-2 transition-transform duration-300">
          <h3 class="font-bold text-coquette-accent uppercase tracking-wider mb-2 flex items-center gap-2">
            <i class="fa-solid fa-wand-magic-sparkles text-pink-300"></i> Skills
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-pink-50 text-coquette-dark rounded-full text-sm border border-pink-100">Lightroom</span>
            <span class="px-3 py-1 bg-pink-50 text-coquette-dark rounded-full text-sm border border-pink-100">Digital</span>
            <span class="px-3 py-1 bg-pink-50 text-coquette-dark rounded-full text-sm border border-pink-100">Studio Lighting</span>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="#" class="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out bg-coquette-main rounded-full shadow-md group">
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-coquette-dark group-hover:translate-x-0 ease">
            <i class="fa-solid fa-download"></i>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Download Resume</span>
          <span class="relative invisible">Download Resume</span>
        </a>
      </div>
    </div>
  </section>
</template>