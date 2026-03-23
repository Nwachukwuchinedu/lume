<script setup lang="ts">
import { Check, X } from 'lucide-vue-next';
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  { name: 'Pure Spatial Audio', aura: true, sony: false, apple: true },
  { name: '40-Hour Battery Life', aura: true, sony: true, apple: false },
  { name: 'Aerospace-Grade Aluminum', aura: true, sony: false, apple: true },
  { name: 'Adaptive Transparency', aura: true, sony: true, apple: true },
  { name: 'Lossless Audio Support', aura: true, sony: false, apple: false },
  { name: 'No-Screw Build', aura: true, sony: false, apple: false },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.feature-row', {
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.comp-grid',
      start: 'top 80%',
    }
  });

  gsap.from('.check-icon', {
    scale: 0,
    rotate: -45,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.comp-grid',
        start: 'top 80%',
    }
  });
});
</script>

<template>
  <section class="py-40 px-6 bg-[#fcfcfd]">
    <div class="max-w-6xl mx-auto text-center reveal-up">
        <h2 class="text-5xl font-extrabold tracking-tight mb-4 leading-tight">Beyond comparison.</h2>
        <p class="text-xl text-gray-500 mb-20 text-balance">The only headphones engineered without compromise.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 text-left comp-grid items-center font-bold">
            <div class="hidden md:block"></div>
            <div class="bg-black text-white p-6 rounded-[2rem] text-center shadow-2xl relative overflow-hidden group">
                <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div class="relative z-10">LUME ONE</div>
            </div>
            <div class="text-gray-400 text-center">WH-1000XM5</div>
            <div class="text-gray-400 text-center">AirPods Max</div>
        </div>

        <div class="comp-table space-y-4 mt-8">
            <div v-for="(f, i) in features" :key="i" class="grid grid-cols-1 md:grid-cols-4 gap-8 p-10 bg-white border border-black/5 rounded-[2.5rem] feature-row items-center font-semibold text-lg transition-transform hover:scale-[1.01]">
                <div class="font-bold text-gray-900">{{ f.name }}</div>
                <div class="flex justify-center flex-col items-center">
                    <div class="bg-black p-3 rounded-full text-white check-icon">
                        <Check class="w-6 h-6" />
                    </div>
                </div>
                <div class="flex justify-center flex-col items-center">
                    <div v-if="f.sony" class="bg-gray-100 p-3 rounded-full text-black check-icon">
                        <Check class="w-6 h-6" />
                    </div>
                    <div v-else class="text-gray-200 check-icon">
                        <X class="w-6 h-6" />
                    </div>
                </div>
                <div class="flex justify-center flex-col items-center">
                    <div v-if="f.apple" class="bg-gray-100 p-3 rounded-full text-black check-icon">
                        <Check class="w-6 h-6" />
                    </div>
                    <div v-else class="text-gray-200 check-icon">
                        <X class="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>
