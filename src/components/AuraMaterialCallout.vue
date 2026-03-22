<script setup lang="ts">
import { ref } from 'vue';

const hotspots = [
    { x: '30%', y: '40%', title: 'Grade 6063 Aluminum', content: 'Lightweight, durable, and precision-engineered for zero resonance.' },
    { x: '70%', y: '35%', title: 'Memory Foam', content: 'Density of 60kg/m³, designed for all-day comfort and acoustic sealing.' },
    { x: '50%', y: '65%', title: '40mm Aura Driver', content: 'Custom-developed diaphragm for punchy bass and crystalline highs.' },
    { x: '25%', y: '75%', title: 'Mesh Fabric', content: 'Breathable synthetic skin allows for maximum comfort without sound leakage.' }
];

const active = ref<number | null>(null);
</script>

<template>
  <section class="py-40 px-6 bg-black text-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div class="relative">
        <div class="h-[600px] w-full rounded-[4rem] bg-gradient-to-br from-gray-900 to-black overflow-hidden relative border border-white/10 group">
          <!-- Main Product Focus -->
          <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=1000&auto=format&fit=crop" 
               alt="Aura Internals" 
               class="w-full h-full object-cover scale-150 group-hover:scale-125 transition-transform duration-1000 opacity-60">
          
          <!-- Hotspots -->
          <div v-for="(h, i) in hotspots" :key="i" 
               class="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
               :style="{ left: h.x, top: h.y }"
               @mouseenter="active = i"
               @mouseleave="active = null">
            <span class="absolute inset-0 bg-white rounded-full animate-ping opacity-20 scale-150"></span>
            <span class="absolute inset-1.5 bg-white rounded-full shadow-[0_0_20px_white] transition-transform" :class="{'scale-150': active === i}"></span>
            
            <!-- Tooltip -->
            <transition name="fade">
              <div v-if="active === i" class="absolute left-10 top-0 w-64 bg-white text-black p-5 rounded-3xl shadow-2xl z-20 origin-left">
                <h4 class="font-bold text-lg mb-2">{{ h.title }}</h4>
                <p class="text-sm text-gray-500 leading-relaxed">{{ h.content }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
      
      <div>
        <div class="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-8">INSIDE THE BUILD</div>
        <h2 class="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">Masterpiece <br><span class="text-gray-500">of engineering.</span></h2>
        <p class="text-xl text-gray-400 mb-12 text-balance leading-[1.4]">Every millimeter of Aura One is sculpted with intent. No screws. No joints. Just absolute acoustic purity.</p>
        
        <div class="space-y-8">
            <div v-for="(h, i) in hotspots" :key="i" class="border-t border-white/5 pt-8 group cursor-pointer" @mouseenter="active = i" @mouseleave="active = null">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-2xl font-bold transition-colors" :class="active === i ? 'text-white' : 'text-gray-500'">{{ h.title }}</span>
                    <span class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">0{{ i + 1 }}</span>
                </div>
                <p class="text-gray-500 transition-opacity" :class="active === i ? 'opacity-100' : 'opacity-0'">{{ h.content }}</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
