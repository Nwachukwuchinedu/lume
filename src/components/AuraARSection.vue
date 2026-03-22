<script setup lang="ts">
import { Camera, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <section class="py-40 px-6 bg-[#fcfcfd]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div class="h-[600px] bg-gradient-to-br from-[#111] to-[#222] rounded-[4rem] relative overflow-hidden group shadow-2xl flex items-center justify-center">
        <!-- Mock AR View -->
        <div class="absolute inset-0 opacity-40 mix-blend-screen bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20"></div>
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000" 
             alt="User Face AR" 
             class="w-full h-full object-cover grayscale opacity-20 transition-all duration-1000 group-hover:scale-110">
        
        <!-- Camera Icon Overlay -->
        <div class="relative z-10 w-24 h-24 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all">
          <Camera class="w-10 h-10" />
        </div>
        
        <!-- Scanning Effect -->
        <div class="absolute top-0 left-0 w-full h-[2px] bg-white opacity-40 animate-scan"></div>
      </div>
      
      <div>
        <div class="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-8 uppercase">Future-Proof</div>
        <h2 class="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">Virtual <br><span class="text-gray-400">try-on.</span></h2>
        <p class="text-xl text-gray-500 mb-12 text-balance leading-[1.4]">Experience Aura One from the comfort of your home. Use our high-precision AR scanner to see exactly how they sit on your head and match your style.</p>
        
        <button class="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-2 group magnetic-btn">
          Open AR Scanner <ArrowRight class="w-5 h-5 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
  0% { top: 0; }
  100% { top: 100%; }
}
.animate-scan {
  animation: scan 3s linear infinite;
}
</style>
