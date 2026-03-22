<script setup lang="ts">
import { BatteryCharging, Bluetooth, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <section class="py-20 px-6 max-w-7xl mx-auto">
    <div class="mb-16 text-center reveal-up">
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Engineering marvel.</h2>
      <p class="text-xl text-gray-500 text-balance">Every detail meticulously designed for the modern audiophile.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
      
      <!-- Large Feature 1 -->
      <div class="bento-card md:col-span-2 relative p-10 flex flex-col justify-end img-zoom-container bg-[#f4f4f5] reveal-up clip-reveal">
        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop" alt="Noise Cancellation" class="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="relative z-10 text-white">
          <div class="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 border border-white/20">SILENCE</div>
          <h3 class="text-3xl font-bold mb-2">Absolute ANC.</h3>
          <p class="text-gray-200 max-w-sm">Six microphones detect and cancel external noise before you even hear it.</p>
        </div>
      </div>

      <!-- Small Feature 1 -->
      <div class="bento-card bg-black text-white p-10 flex flex-col justify-between relative overflow-hidden group reveal-up" style="transition-delay: 100ms;">
        <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2 float-element"></div>
        <div class="relative z-10">
          <BatteryCharging class="w-8 h-8 text-indigo-400 mb-6" />
          <h3 class="text-5xl font-extrabold tracking-tighter mb-2">40h</h3>
          <p class="text-gray-400 font-medium uppercase tracking-widest text-sm">Battery Life</p>
        </div>
        <p class="text-gray-400 text-sm relative z-10">Listen for days on a single charge. 5 minutes yields 4 hours of playback.</p>
      </div>

      <!-- Small Feature 2 -->
      <div class="bento-card p-10 flex flex-col justify-between bg-white relative overflow-hidden group reveal-up">
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-100 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
        <div class="relative z-10">
          <Bluetooth class="w-8 h-8 mb-6 text-black" />
          <h3 class="text-2xl font-bold mb-2">Lossless Audio</h3>
          <p class="text-gray-500">Bluetooth 5.3 with aptX Adaptive ensures you hear every single note.</p>
        </div>
        <!-- Decorative Wave -->
        <div class="relative z-10 h-24 w-full mt-6 flex items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
          <div v-for="i in 15" :key="i" class="bg-black w-2 rounded-t-full origin-bottom animate-pulse" :style="{ height: `${10 + Math.random() * 90}%` }"></div>
        </div>
      </div>

      <!-- Large Feature 2 -->
      <div class="bento-card md:col-span-2 relative p-10 flex flex-col justify-center img-zoom-container bg-[#fafafa] reveal-up" style="transition-delay: 100ms;">
        <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=1000&auto=format&fit=crop" alt="Comfort" class="absolute right-0 top-0 w-1/2 h-full object-cover hidden md:block" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);">
        <div class="relative z-10 md:w-1/2 pr-6">
          <div class="bg-black text-white w-fit px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4">DESIGN</div>
          <h3 class="text-3xl font-bold mb-4">Cloud-like comfort.</h3>
          <p class="text-gray-500 mb-8 text-balance">Memory foam ear cushions wrapped in breathable synthetic leather. Designed to be forgotten the moment you put them on.</p>
          <a href="#" class="inline-flex items-center gap-2 font-semibold hover:gap-4 transition-all group">Explore Design <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  0% { transform: scaleY(1); }
  100% { transform: scaleY(0.5); }
}
.animate-pulse {
  animation: pulse 0.8s infinite alternate;
}
</style>
