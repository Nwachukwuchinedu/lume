<script setup lang="ts">
import { ref, onMounted } from 'vue';

const visible = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    // Show buy bar after scrolling past 800px and hide near footer
    const scrollPos = window.scrollY;
    const footerPos = document.body.offsetHeight - window.innerHeight - 300;
    visible.value = scrollPos > 800 && scrollPos < footerPos;
  });
});
</script>

<template>
  <div class="buy-bar" :class="{ 'visible': visible }">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-4">
        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=100&auto=format&fit=crop" alt="Aura One" class="w-12 h-12 rounded-lg object-cover">
        <div>
          <h4 class="font-bold text-sm">Aura One</h4>
          <p class="text-xs text-gray-500">$399.00</p>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="hidden md:flex gap-2 items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span class="text-xs font-medium text-gray-500">Only 340 units left</span>
        </div>
        <button class="bg-black text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg magnetic-btn">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>
