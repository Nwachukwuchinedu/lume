<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AuraNavbar from './components/AuraNavbar.vue';
import AuraHero from './components/AuraHero.vue';
import AuraMarquee from './components/AuraMarquee.vue';
import AuraColorSelector from './components/AuraColorSelector.vue';
import AuraBentoGrid from './components/AuraBentoGrid.vue';
import AuraSpecs from './components/AuraSpecs.vue';
import AuraShowcase from './components/AuraShowcase.vue';
import AuraCTA from './components/AuraCTA.vue';
import AuraFooter from './components/AuraFooter.vue';

const scrolled = ref(false);

onMounted(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Handle Navbar styling on scroll
    window.addEventListener('scroll', () => {
        scrolled.value = window.scrollY > 50;
    });

    // --- 1. NON-SCROLL ANIMATIONS (Always running) ---
    
    // Floating badge
    gsap.to('.hero-badge', { y: -8, duration: 2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    
    // Floating abstract elements & products
    gsap.to('.float-element', { y: -15, rotation: 5, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.5 });
    gsap.to('.float-product', { y: -10, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });

    // --- 2. INITIAL PAGE LOAD ANIMATIONS ---
    const tl = gsap.timeline();
    
    tl.fromTo('.reveal-nav', 
        { y: -20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    )
    .fromTo('.hero-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        "-=0.4"
    )
    .fromTo('.hero-text',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out' },
        "-=0.4"
    )
    .fromTo('.hero-subtext',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.6"
    )
    .fromTo('.hero-btns button',
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        "-=0.4"
    )
    .fromTo('.hero-image',
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
        "-=0.4"
    );

    // Hero Parallax on Scroll
    gsap.to('.hero-image img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-image',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // --- 3. SCROLL REVEAL ANIMATIONS (Sections appearing as you scroll) ---
    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 60, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%', 
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // --- 4. ADVANCED PARALLAX SHOWCASE (Sticky section) ---
    const showcaseTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.showcase-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        }
    });

    showcaseTl.fromTo('.showcase-img', 
        { rotate: -15, scale: 0.8, y: 50 },
        { rotate: 10, scale: 1.3, y: -50, ease: 'none' }
    );
    
    showcaseTl.fromTo('.showcase-glow',
        { scale: 0.8, opacity: 0.2, backgroundColor: 'rgba(255,255,255,0.1)' },
        { scale: 2, opacity: 0.6, backgroundColor: 'rgba(255,255,255,0.4)', ease: 'none' },
        "<"
    );
    
    showcaseTl.to('.showcase-text-container', {
        opacity: 0.3,
        y: -50,
        ease: 'none'
    }, 0.5);
});
</script>

<template>
  <div id="content">
    <AuraNavbar :scrolled="scrolled" />
    <main>
      <AuraHero />
      <AuraMarquee />
      <AuraColorSelector />
      <AuraBentoGrid />
      <AuraSpecs />
      <AuraShowcase />
      <AuraCTA />
    </main>
    <AuraFooter />
  </div>
</template>
