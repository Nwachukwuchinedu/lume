<script setup lang="ts">
import { ArrowRight, PlayCircle } from 'lucide-vue-next';
</script>

<template>
  <section class="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
    <div class="max-w-4xl mx-auto z-10">
      <div class="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-8">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span class="text-xs font-semibold uppercase tracking-widest text-gray-500">Aura One Now Available</span>
      </div>
      
      <h1 class="hero-text text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] text-balance mb-6">
        Hear the unseen. <br>
        <span class="text-gray-400">Feel the sound.</span>
      </h1>
      
      <p class="hero-subtext text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 text-balance">
        Experience spatial audio redefined. Sculpted from aerospace-grade aluminum and engineered for pure, unadulterated acoustic perfection.
      </p>
      
      <div class="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2">
          Buy Now <ArrowRight class="w-5 h-5" />
        </button>
        <button class="w-full sm:w-auto bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
          <PlayCircle class="w-5 h-5" /> Watch Film
        </button>
      </div>
    </div>

    <!-- Floating Hero Image -->
    <div class="hero-image mt-20 w-full max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
      <!-- non-scroll floating decoration -->
      <div class="float-element absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-3xl z-0"></div>
      <div class="float-element absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-gray-400/30 to-black/30 rounded-full blur-3xl z-0" style="animation-delay: 1s;"></div>
      
      <div class="absolute inset-0 bg-black/5 z-10 rounded-3xl"></div>
      <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2000&auto=format&fit=crop" alt="Aura Headphones" class="w-full h-[400px] md:h-[600px] object-cover object-center rounded-3xl relative z-20">
    </div>
  </section>
</template>
