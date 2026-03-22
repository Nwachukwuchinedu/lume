<script setup lang="ts">
// This component relies on GSAP animations handled in App.vue
</script>

<template>
  <section class="h-[200vh] relative bg-black text-white showcase-container">
    <div class="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-6">
      <div class="w-full md:w-1/2 flex justify-center showcase-text-container z-20">
        <div class="max-w-md">
          <h2 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-balance">Spatial <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Awareness.</span></h2>
          <p class="text-xl text-gray-400 mb-8 text-balance">Dynamic head tracking places sound all around you to create a three-dimensional listening experience for music, TV shows, and movies.</p>
          <button class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">Experience Spatial</button>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop" alt="Headphones Floating" class="showcase-img w-64 md:w-96 rounded-3xl shadow-2xl object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 z-10">
        <!-- Decorative glowing orb that moves on scroll -->
        <div class="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/10 rounded-full blur-[80px] md:blur-[120px] z-0 showcase-glow"></div>
      </div>
    </div>
  </section>
</template>
