<template>
  <section class="flex flex-col items-center py-20 px-6 text-center relative overflow-hidden">
    <div class="absolute top-10 left-10 w-32 h-32 bg-coquette-main rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>

    <div class="relative z-10 animate-float mb-10 group cursor-pointer">
      <div class="absolute -inset-1 bg-gradient-to-r from-pink-200 to-coquette-main rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
      <div class="relative bg-white p-4 rounded-[2rem] shadow-soft rotate-[-2deg] group-hover:rotate-0 transition-all duration-500">
        <img 
          src="/images/profile-picture.jpeg" 
          alt="Laura" 
          class="w-64 h-80 object-cover rounded-[1.5rem] filter sepia-[0.1] hover:sepia-0 transition-all duration-500" 
        />
        <div class="absolute -top-6 -right-6 text-5xl text-coquette-dark drop-shadow-md transform rotate-12">
          🎀
        </div>
      </div>
    </div>
    
    <div class="relative z-10 max-w-2xl">
      <h1 class="font-fancy text-7xl md:text-8xl text-coquette-accent mb-2 drop-shadow-sm">
        Laura Inzunza
      </h1>
      
      <div class="inline-flex items-center gap-4 mb-8">
        <span class="h-px w-12 bg-coquette-main"></span>
        <span class="font-body uppercase tracking-[0.3em] text-sm text-coquette-dark font-bold">Photography Portfolio</span>
        <span class="h-px w-12 bg-coquette-main"></span>
      </div>
      
      <div class="bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-glow transition-all duration-500">
        <p class="font-elegant text-xl leading-relaxed text-gray-600">
          <i class="fas fa-quote-left text-coquette-main text-2xl mr-2"></i>
          Welcome to my visual diary. Capturing the fleeting magic of the everyday, tailored for my Photography Class. Here, light meets shadow in a dance of pastel dreams.
        </p>
      </div>
    </div>
  </section>
</template>