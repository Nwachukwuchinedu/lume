<script setup lang="ts">
import { ref } from 'vue';
import { Plus, Minus } from 'lucide-vue-next';

interface Spec {
  title: string;
  content: string;
  open: boolean;
}

const specs = ref<Spec[]>([
    { title: 'Audio Technology', content: 'Custom high-excursion Aura driver, custom high dynamic range amplifier, Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking.', open: false },
    { title: 'Sensors', content: 'Dual beamforming microphones, inward-facing microphone, skin-detect sensor, motion-detecting accelerometer, speech-detecting accelerometer, and touch control.', open: false },
    { title: 'Battery', content: 'Up to 40 hours of listening time with a single charge (up to 30 hours with Spatial Audio and Head Tracking enabled). 5 minutes of charge time provides around 4 hours of listening time.', open: false },
    { title: 'Connectivity', content: 'Bluetooth 5.3 wireless technology with aptX Adaptive support for lossless audio streaming. Ultra-wideband chip for precision finding.', open: false }
]);

const toggleSpec = (index: number) => {
    const spec = specs.value[index];
    if (spec) {
      spec.open = !spec.open;
    }
};
</script>

<template>
  <section class="py-24 px-6 bg-white border-t border-gray-100">
    <div class="max-w-4xl mx-auto reveal-up">
      <h2 class="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
      <div class="border-t border-gray-200">
        <div v-for="(spec, index) in specs" :key="index" class="border-b border-gray-200">
          <button @click="toggleSpec(index)" class="w-full py-6 flex justify-between items-center text-left hover:text-gray-600 transition-colors focus:outline-none">
            <span class="text-xl font-semibold">{{ spec.title }}</span>
            <component :is="spec.open ? Minus : Plus" class="w-6 h-6 transition-transform duration-300" :class="{'rotate-180': spec.open}" />
          </button>
          <!-- Vue transition for smooth accordion expand/collapse -->
          <transition 
            enter-active-class="transition-[max-height,opacity] duration-500 ease-in-out" 
            enter-from-class="max-h-0 opacity-0" 
            enter-to-class="max-h-[500px] opacity-100" 
            leave-active-class="transition-[max-height,opacity] duration-300 ease-in-out" 
            leave-from-class="max-h-[500px] opacity-100" 
            leave-to-class="max-h-0 opacity-0">
            <div v-show="spec.open" class="overflow-hidden">
              <p class="pb-6 text-gray-500 leading-relaxed">{{ spec.content }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
