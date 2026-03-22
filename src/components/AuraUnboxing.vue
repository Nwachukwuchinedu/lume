<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.unboxing-section',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: true
    }
  });

  // Animate box lid up
  tl.to('.box-lid', { y: -200, opacity: 0, duration: 1 })
    // Animate tissue paper reveal
    .to('.box-tissue', { scale: 1.5, opacity: 0, duration: 1 }, "-=0.2")
    // Animate Headphones rising
    .from('.box-headphones', { y: 100, scale: 0.8, opacity: 0, duration: 1 }, "-=0.5");
});
</script>

<template>
  <section class="unboxing-section h-[200vh] bg-gray-50 overflow-hidden relative flex items-center justify-center">
    <div class="relative w-[500px] h-[500px] flex items-center justify-center">
      <!-- Box Shadow -->
      <div class="absolute w-[400px] h-[400px] bg-black/5 rounded-[4rem] blur-2xl"></div>
      
      <!-- Inner Case -->
      <div class="absolute w-[400px] h-[400px] bg-white rounded-[4rem] shadow-2xl flex items-center justify-center overflow-hidden z-0">
          <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop" 
               alt="Aura One" 
               class="box-headphones w-3/4 object-contain drop-shadow-2xl z-10">
          <!-- Tissue Paper -->
          <div class="box-tissue absolute inset-0 bg-[#f9f9f9] z-20 mix-blend-multiply flex items-center justify-center">
              <span class="text-xs uppercase tracking-[0.5em] text-gray-300 font-bold">Unboxing the Future</span>
          </div>
      </div>

      <!-- Box Lid -->
      <div class="box-lid absolute w-[410px] h-[410px] bg-white rounded-[4rem] shadow-2xl z-30 flex flex-col items-center justify-center border border-black/5">
        <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
            <div class="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <span class="text-2xl font-bold tracking-tight">AURA</span>
        <span class="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">Sculpted Sound</span>
      </div>
    </div>

    <!-- UI Labels -->
    <div class="absolute bottom-20 left-1/2 -translate-x-1/2 text-center reveal-up">
        <p class="text-xl font-medium text-gray-400">Scroll to reveal your masterwork.</p>
    </div>
  </section>
</template>
