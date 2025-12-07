<template>
  <section class="py-24 px-4 flex justify-center items-center relative overflow-hidden">
    
    <div class="absolute top-10 left-10 text-6xl text-coquette-main/20 rotate-[-15deg]">🎀</div>
    <div class="absolute bottom-10 right-10 text-6xl text-coquette-main/20 rotate-[15deg]">🎀</div>

    <div class="relative bg-white/80 backdrop-blur-md w-full max-w-2xl p-12 rounded-[3rem] shadow-glow border-4 border-double border-white text-center group hover:-translate-y-2 transition-transform duration-500">
      
      <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-10 bg-pink-200/80 rotate-1 shadow-sm backdrop-blur-sm z-10"></div>

      <div class="mb-6 animate-float">
        <i class="fa-solid fa-envelope-open-text text-5xl text-coquette-main drop-shadow-sm"></i>
      </div>

      <h2 class="font-fancy text-6xl text-coquette-accent mb-6">Let's Connect</h2>
      
      <p class="font-elegant text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
        I am currently open for commissions and creative collaborations. 
        <br>
        <span class="text-sm text-pink-400 italic font-body tracking-wider mt-2 block">~ Let's create something beautiful ~</span>
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-6 items-center">
        
        <a 
          href="mailto:tu-email@ejemplo.com" 
          class="flex items-center gap-3 px-8 py-4 bg-white border-2 border-pink-100 rounded-full text-coquette-text font-body font-bold uppercase tracking-wider shadow-sm hover:shadow-glow hover:border-coquette-main hover:text-coquette-accent hover:scale-105 transition-all duration-300 w-full md:w-auto justify-center"
        >
          <i class="fa-solid fa-envelope text-xl text-pink-300"></i>
          <span>Email Me</span>
        </a>

        <a 
          href="https://instagram.com/tu_usuario" 
          target="_blank"
          class="flex items-center gap-3 px-8 py-4 bg-coquette-main text-white rounded-full font-body font-bold uppercase tracking-wider shadow-md hover:shadow-glow hover:bg-coquette-accent hover:scale-105 transition-all duration-300 w-full md:w-auto justify-center"
        >
          <i class="fa-brands fa-instagram text-2xl"></i>
          <span>Instagram</span>
        </a>

      </div>

      <div class="mt-12 opacity-60">
         <p class="font-fancy text-2xl text-coquette-main">🎀</p>
      </div>

    </div>
  </section>
</template>