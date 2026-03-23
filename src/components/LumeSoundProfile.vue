<script setup lang="ts">
import { ref } from 'vue';

interface Profile {
  name: string;
  path: string;
  color: string;
}

const profiles: Profile[] = [
  { name: 'Neutral', path: 'M 0 100 Q 250 100 500 100 T 1000 100', color: 'bg-gray-100' },
  { name: 'Bass-Boosted', path: 'M 0 50 Q 250 50 500 100 T 1000 100', color: 'bg-indigo-100' },
  { name: 'Vocal Clarity', path: 'M 0 100 Q 250 100 500 50 T 1000 50', color: 'bg-rose-100' },
  { name: 'Studio', path: 'M 0 110 Q 250 90 500 110 T 1000 90', color: 'bg-blue-100' },
];

const active = ref<Profile>(profiles[0]!);
</script>

<template>
  <section class="py-40 px-6 bg-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <div class="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-8">SOUND PROFILES</div>
        <h2 class="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">Tailored <br><span class="text-gray-400">to your ear.</span></h2>
        <p class="text-xl text-gray-500 mb-12 text-balance leading-[1.4]">Select from our meticulously tuned EQ presets or create your own signature profile in the Lume App.</p>
        
        <div class="flex flex-wrap gap-4">
            <button v-for="p in profiles" :key="p.name" 
                @click="active = p"
                class="px-8 py-4 rounded-full font-bold transition-all text-lg shadow-sm magnetic-btn"
                :class="active.name === p.name ? 'bg-black text-white scale-105 shadow-xl' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'">
                {{ p.name }}
            </button>
        </div>
      </div>
      
      <div class="relative h-[400px] w-full bg-gray-50 rounded-[4rem] p-10 flex flex-col justify-center border border-black/5 group">
        <!-- SVG Visualizer -->
        <svg viewBox="0 0 1000 200" class="w-full h-48 group-hover:scale-110 transition-transform duration-1000 overflow-visible">
            <path :d="active.path" 
                  fill="none" 
                  stroke="black" 
                  stroke-width="4" 
                  stroke-linecap="round"
                  class="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
            
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
        </svg>
        <div class="flex justify-between mt-10 text-xs font-bold uppercase tracking-widest text-gray-300">
            <span>Bass</span>
            <span>Mid</span>
            <span>Treble</span>
        </div>
      </div>
    </div>
  </section>
</template>
