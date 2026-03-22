<script setup lang="ts">
defineProps<{
  scrolled: boolean;
}>();
</script>

<template>
  <nav class="fixed top-0 w-full z-50 glass-nav transition-all duration-300" :class="{'py-4': !scrolled, 'py-2': scrolled}">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2 cursor-pointer reveal-nav">
        <div class="w-8 h-8 rounded-full flex items-center justify-center transition-colors" :class="scrolled ? 'bg-black' : 'bg-white/10'">
          <div class="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <span class="font-bold text-xl tracking-tight">AURA</span>
      </div>
      
      <div class="hidden md:flex items-center gap-8 font-medium text-sm text-gray-500 reveal-nav">
        <a href="#" class="hover:text-black dark:hover:text-white transition-colors">Products</a>
        <a href="#" class="hover:text-black dark:hover:text-white transition-colors">Technology</a>
        <a href="#" class="hover:text-black dark:hover:text-white transition-colors">Sustainability</a>
        <a href="#" class="hover:text-black dark:hover:text-white transition-colors">Support</a>
      </div>

      <div class="flex items-center gap-4 reveal-nav">
        <button class="hidden md:block font-medium text-sm hover:opacity-70 transition-opacity">Log In</button>
        <button class="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg magnetic-btn">
          Pre-order
        </button>
      </div>
    </div>
  </nav>
</template>
