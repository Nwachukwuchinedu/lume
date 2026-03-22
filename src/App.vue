<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AuraNavbar from './components/AuraNavbar.vue';
import AuraHero from './components/AuraHero.vue';
import AuraMarquee from './components/AuraMarquee.vue';
import AuraPressWall from './components/AuraPressWall.vue';
import AuraMaterialCallout from './components/AuraMaterialCallout.vue';
import AuraSoundProfile from './components/AuraSoundProfile.vue';
import AuraHorizontalScroll from './components/AuraHorizontalScroll.vue';
import AuraBentoGrid from './components/AuraBentoGrid.vue';
import AuraComparison from './components/AuraComparison.vue';
import AuraTestimonialStrip from './components/AuraTestimonialStrip.vue';
import AuraUnboxing from './components/AuraUnboxing.vue';
import AuraMediaTicker from './components/AuraMediaTicker.vue';
import AuraCTA from './components/AuraCTA.vue';
import AuraFooter from './components/AuraFooter.vue';
import AuraBuyBar from './components/AuraBuyBar.vue';
import AuraSpecs from './components/AuraSpecs.vue';
import AuraProduct3D from './components/AuraProduct3D.vue';
import AuraARSection from './components/AuraARSection.vue';

import { initMagneticButtons } from './utils/animations';

const scrolled = ref(false);
const isDarkSection = ref(false);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Cursor Trailer
  const trailer = document.querySelector('.cursor-trailer') as HTMLElement;
  const dot = document.querySelector('.cursor-dot') as HTMLElement;
  
  window.addEventListener('mousemove', (e) => {
    gsap.to(trailer, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power3.out' });
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
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

    <AuraNavbar :scrolled="scrolled" :class="{ 'nav-dark': isDarkSection }" />
    
    <main>
      <AuraHero />
      <AuraMarquee />
      <AuraPressWall />
      <AuraProduct3D />
      <AuraMaterialCallout />
      <AuraSoundProfile />
      <AuraHorizontalScroll />
      <AuraBentoGrid />
      <AuraComparison />
      <AuraSpecs />
      <AuraUnboxing />
      <AuraARSection />
      <AuraTestimonialStrip />
      <AuraMediaTicker />
      <AuraCTA />
    </main>
    
    <AuraBuyBar />
    <AuraFooter />
  </div>
</template>
