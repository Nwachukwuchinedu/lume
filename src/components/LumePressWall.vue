<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const quotes = [
  { logo: 'Wired', quote: "The future of spatial audio is here, and it's crystal clear.", color: 'bg-black text-white' },
  { logo: 'The Verge', quote: "Design-wise, it's the sleekest headphone on the market.", color: 'bg-gray-100 text-black' },
  { logo: 'Forbes', quote: "Lume is a masterpiece of modern engineering.", color: 'bg-white text-black border border-gray-100' },
  { logo: 'Rolling Stone', quote: "Hearing music for the first time, all over again.", color: 'bg-black text-white' },
  { logo: 'TechRadar', quote: "Battery life that actually outlasts your longest flight.", color: 'bg-gray-100 text-black' },
];

onMounted(() => {
  gsap.from('.press-card', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.press-wall',
      start: 'top 80%',
    }
  });
});
</script>

<template>
  <section class="py-32 px-6 press-wall bg-[#fcfcfd]">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2 class="text-4xl font-extrabold tracking-tight">Recognized by the best.</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div v-for="(q, index) in quotes" :key="index" 
            class="press-card rounded-[2.5rem] p-8 flex flex-col justify-between h-[300px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] cursor-default group"
            :class="q.color">
          <h3 class="font-extrabold text-2xl mb-4 group-hover:scale-110 transition-transform origin-left">{{ q.logo }}</h3>
          <p class="text-lg font-medium leading-[1.3] text-balance opacity-80 group-hover:opacity-100 transition-opacity">“{{ q.quote }}”</p>
        </div>
      </div>
    </div>
  </section>
</template>
