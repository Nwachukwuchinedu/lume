<script setup lang="ts">
import { ShoppingBag } from 'lucide-vue-next';
</script>

<template>
  <section class="py-32 px-6 bg-brand-50 text-center relative overflow-hidden reveal-up">
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 24px 24px;"></div>
    <div class="max-w-2xl mx-auto relative z-10">
      <h2 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Ready to tune in?</h2>
      <p class="text-xl text-gray-600 mb-10 text-balance">Join the revolution of sound. Order your Lume One today and get 6 months of Lossless Music free.</p>
      <button class="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-2 mx-auto float-element">
        Pre-order Now <ShoppingBag class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>
