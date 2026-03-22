<script setup lang="ts">
import { Zap, Headphones } from 'lucide-vue-next';
</script>

<template>
  <section class="py-10 border-y border-gray-100 bg-white overflow-hidden flex whitespace-nowrap">
    <div class="animate-marquee flex gap-12 items-center px-6">
      <span v-for="i in 10" :key="i" class="text-2xl font-bold text-gray-300 uppercase tracking-widest flex items-center gap-12">
        Pure Fidelity <Zap class="w-6 h-6 text-yellow-400" /> Active Noise Cancelling <Headphones class="w-6 h-6 text-gray-300" />
      </span>
    </div>
    <div class="animate-marquee flex gap-12 items-center px-6" aria-hidden="true">
      <span v-for="i in 10" :key="i + 10" class="text-2xl font-bold text-gray-300 uppercase tracking-widest flex items-center gap-12">
        Pure Fidelity <Zap class="w-6 h-6 text-yellow-400" /> Active Noise Cancelling <Headphones class="w-6 h-6 text-gray-300" />
      </span>
    </div>
  </section>
</template>
