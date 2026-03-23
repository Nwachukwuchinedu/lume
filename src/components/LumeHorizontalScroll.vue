<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  { title: 'Aerospace Components', desc: 'Sourced from Virgin Galactic suppliers for uncompromising durability.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000' },
  { title: 'Neural ANC', desc: 'Real-time noise cancellation driven by our custom Lume AI chip.', image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000' },
  { title: 'Infinite Battery', desc: 'Our proprietary energy recovery system extends single-charge life to 60h.', image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1000' },
  { title: 'Spatial Studio', desc: 'Place yourself in the middle of any concert hall in the world.', image: 'https://images.unsplash.com/photo-1593077542540-ad0503f8993a?q=80&w=1000' },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const sections = gsap.utils.toArray('.horizontal-panel');
  
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-container",
      pin: true,
      scrub: 1,
      end: () => "+=" + (document.querySelector('.horizontal-container') as HTMLElement).offsetWidth * 4
    }
  });
});
</script>

<template>
  <section class="horizontal-container bg-black overflow-hidden relative">
    <div class="flex flex-nowrap h-screen">
      <div v-for="(f, i) in features" :key="i" 
           class="horizontal-panel flex-shrink-0 w-screen h-screen relative flex items-center justify-center p-10 overflow-hidden">
        
        <!-- Background Reveal Image -->
        <div class="absolute inset-x-20 inset-y-40 rounded-[4rem] overflow-hidden group">
            <img :src="f.image" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-1000 opacity-60">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <!-- Content Overlay -->
        <div class="relative z-10 text-white max-w-4xl px-20 text-left">
            <div class="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-8">FEATURE 0{{ i + 1 }}</div>
            <h2 class="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight text-white">{{ f.title }}</h2>
            <p class="text-2xl text-gray-400 max-w-xl leading-relaxed text-balance">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.horizontal-panel {
  will-change: transform;
}
</style>
