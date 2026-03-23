<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LumeNavbar from './components/LumeNavbar.vue';
import LumeHero from './components/LumeHero.vue';
import LumeMarquee from './components/LumeMarquee.vue';
import LumePressWall from './components/LumePressWall.vue';
import LumeMaterialCallout from './components/LumeMaterialCallout.vue';
import LumeSoundProfile from './components/LumeSoundProfile.vue';
import LumeHorizontalScroll from './components/LumeHorizontalScroll.vue';
import LumeBentoGrid from './components/LumeBentoGrid.vue';
import LumeComparison from './components/LumeComparison.vue';
import LumeTestimonialStrip from './components/LumeTestimonialStrip.vue';
import LumeUnboxing from './components/LumeUnboxing.vue';
import LumeMediaTicker from './components/LumeMediaTicker.vue';
import LumeCTA from './components/LumeCTA.vue';
import LumeFooter from './components/LumeFooter.vue';
import LumeBuyBar from './components/LumeBuyBar.vue';
import LumeSpecs from './components/LumeSpecs.vue';
import LumeProduct3D from './components/LumeProduct3D.vue';
import LumeARSection from './components/LumeARSection.vue';

import { initMagneticButtons } from './utils/animations';

const scrolled = ref(false);
const isDarkSection = ref(false);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Cursor Trailer
  const trailer = document.querySelector('.cursor-trailer') as HTMLElement;
  const dot = document.querySelector('.cursor-dot') as HTMLElement;
  
  window.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 1024) return;
    gsap.to(trailer, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
  });

  // 2. Scroll Progress
  gsap.to('.scroll-progress', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3
    }
  });

  // 3. Navbar logic
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });

  // 4. Color-Aware Navbar (Dark mode sections)
  const darkSections = document.querySelectorAll('.bg-black, .bg-brand-900');
  darkSections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 50px',
      end: 'bottom 50px',
      onEnter: () => isDarkSection.value = true,
      onLeave: () => isDarkSection.value = false,
      onEnterBack: () => isDarkSection.value = true,
      onLeaveBack: () => isDarkSection.value = false,
    });
  });

  // 5. Magnetic Buttons
  initMagneticButtons();

  // 6. Stats Counter Animations
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach((stat: any) => {
    const target = parseInt(stat.innerText);
    stat.innerText = '0';
    gsap.to(stat, {
      innerText: target,
      duration: 2,
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
      }
    });
  });
});
</script>

<template>
  <div id="app-container">
    <!-- Global Elements -->
    <div class="cursor-trailer hidden lg:block"></div>
    <div class="cursor-dot hidden lg:block"></div>
    <div class="scroll-progress"></div>

    <LumeNavbar :scrolled="scrolled" :class="{ 'nav-dark': isDarkSection }" />
    
    <main>
      <LumeHero />
      <LumeMarquee />
      <LumePressWall />
      <LumeProduct3D />
      <LumeMaterialCallout />
      <LumeSoundProfile />
      <LumeHorizontalScroll />
      <LumeBentoGrid />
      <LumeComparison />
      <LumeSpecs />
      <LumeUnboxing />
      <LumeARSection />
      <LumeTestimonialStrip />
      <LumeMediaTicker />
      <LumeCTA />
    </main>
    
    <LumeBuyBar />
    <LumeFooter />
  </div>
</template>
