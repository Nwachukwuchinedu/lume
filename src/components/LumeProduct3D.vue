<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap';

const cardRef = ref<HTMLElement | null>(null);

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return;
  const rect = cardRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;

  gsap.to(cardRef.value, {
    rotateX: rotateX,
    rotateY: rotateY,
    duration: 0.5,
    ease: 'power3.out'
  });
};

const handleMouseLeave = () => {
  if (!cardRef.value) return;
  gsap.to(cardRef.value, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.8,
    ease: 'elastic.out(1, 0.3)'
  });
};
</script>

<template>
  <section class="py-40 px-6 bg-white overflow-hidden perspective-1000">
    <div class="max-w-4xl mx-auto text-center mb-20">
        <h2 class="text-5xl font-extrabold tracking-tight">Tactile by design.</h2>
    </div>
    
    <div class="max-w-xl mx-auto">
        <div ref="cardRef" 
             @mousemove="handleMouseMove" 
             @mouseleave="handleMouseLeave"
             class="relative aspect-square bg-[#f3f4f6] rounded-[4rem] flex items-center justify-center p-20 shadow-2xl transition-shadow hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] group">
            <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=1000&auto=format&fit=crop" 
                 alt="Lume One" 
                 class="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            
            <div class="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/5 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Move Mouse to Tilt
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
