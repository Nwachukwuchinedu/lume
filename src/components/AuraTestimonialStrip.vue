<script setup lang="ts">
const testimonials = [
  { name: 'Alex Rivera', role: 'Producer @ Spotify', quote: 'The spatial staging is unbelievable. It’s like standing in the middle of a live session.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800' },
  { name: 'Sarah Chen', role: 'Audio Engineer', quote: 'True neutral frequency response. Perfect for critical listening and daily enjoyment.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800' },
  { name: 'Marcus Thorne', role: 'Architect', quote: 'Finally, headphones that match the aesthetic of a modern space. Sculptural by design.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800' },
  { name: 'Elena Vance', role: 'Musician', quote: 'Every nuance of the acoustic guitar is preserved. Low-latency is world-class.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800' }
];
</script>

<template>
  <section class="py-40 px-6 bg-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto mb-20">
      <h2 class="text-5xl font-extrabold tracking-tight">The verdict.</h2>
    </div>
    
    <!-- Drag Scroll Strip -->
    <div class="flex gap-8 overflow-x-auto pb-20 px-6 -mx-6 scrollbar-hide cursor-grab active:cursor-grabbing snap-x">
        <div v-for="t in testimonials" :key="t.name" 
             class="flex-shrink-0 w-[400px] md:w-[600px] h-[500px] relative rounded-[4rem] overflow-hidden snap-center group">
            <img :src="t.image" :alt="t.name" class="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            
            <div class="absolute inset-x-12 bottom-12 text-white">
                <p class="text-2xl font-medium mb-10 leading-tight">“{{ t.quote }}”</p>
                <div>
                    <h4 class="text-xl font-bold">{{ t.name }}</h4>
                    <p class="text-gray-400 font-medium">{{ t.role }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
