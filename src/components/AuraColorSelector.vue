<script setup lang="ts">
import { ref } from 'vue';

const colors = ref([
    { id: 1, name: 'Midnight', hex: '#111111', bg: '#f3f4f6', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop&bg=transparent' },
    { id: 2, name: 'Starlight', hex: '#f9fafb', bg: '#e5e7eb', image: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=800&auto=format&fit=crop&bg=transparent' },
    { id: 3, name: 'Abyss Blue', hex: '#1e3a8a', bg: '#e0e7ff', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop&bg=transparent' },
    { id: 4, name: 'Rose Gold', hex: '#fda4af', bg: '#ffe4e6', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop&bg=transparent' }
]);
const activeColor = ref(colors.value[0]);
</script>

<template>
  <section class="py-32 px-6 max-w-7xl mx-auto reveal-up">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="relative h-[500px] rounded-[2.5rem] bg-gray-100 flex items-center justify-center overflow-hidden transition-colors duration-700" :style="{ backgroundColor: activeColor.bg }">
        <!-- Smooth fade transition for images -->
        <transition name="fade" mode="out-in">
          <img :key="activeColor.id" :src="activeColor.image" :alt="activeColor.name" class="w-3/4 object-contain drop-shadow-2xl z-10 float-product">
        </transition>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-0"></div>
      </div>
      
      <div class="flex flex-col justify-center">
        <div class="bg-black text-white w-fit px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6">PERSONALIZATION</div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Find your aura.</h2>
        <p class="text-xl text-gray-500 mb-10 text-balance">Available in four distinct colorways, crafted to match your personal aesthetic without compromising acoustic performance.</p>
        
        <div class="space-y-6">
          <div class="flex gap-4">
            <button v-for="color in colors" :key="color.id" 
                @click="activeColor = color"
                class="w-12 h-12 rounded-full border-2 transition-all duration-300 relative focus:outline-none"
                :class="activeColor.id === color.id ? 'border-black scale-110 shadow-lg' : 'border-transparent scale-100 hover:scale-105'"
                :style="{ backgroundColor: color.hex }">
              <span v-if="activeColor.id === color.id" class="absolute inset-0 border-[3px] border-white rounded-full"></span>
            </button>
          </div>
          <p class="text-lg font-semibold text-gray-900">{{ activeColor.name }} Edition</p>
        </div>
      </div>
    </div>
  </section>
</template>
