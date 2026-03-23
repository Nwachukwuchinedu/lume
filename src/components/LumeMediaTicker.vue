<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Play, Pause, Repeat, SkipBack, SkipForward, Volume2 } from 'lucide-vue-next';

const isPlaying = ref(false);
const progress = ref(45); // mocked progress
const audioRef = ref<HTMLAudioElement | null>(null);

const togglePlay = () => {
    if (!audioRef.value) return;
    if (isPlaying.value) audioRef.value.pause();
    else audioRef.value.play();
    isPlaying.value = !isPlaying.value;
};

// Update progress bar on time update
const updateProgress = () => {
    if (!audioRef.value) return;
    progress.value = (audioRef.value.currentTime / audioRef.value.duration) * 100;
};
</script>

<template>
  <section class="py-20 px-6 bg-brand-900 text-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div class="flex-1">
        <div class="flex items-center gap-4 mb-8">
            <span class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-pulse"><Volume2 class="w-6 h-6" /></span>
            <div>
                <h4 class="text-xl font-bold">Immersive Demo: "Midnight Lume"</h4>
                <p class="text-gray-500 font-medium">Original Soundscape for Lume One</p>
            </div>
        </div>
        
        <!-- Custom Player UI -->
        <div class="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/10 shadow-2xl group transition-all hover:bg-white/10">
            <!-- Waveform Seek Bar (Simulated) -->
            <div class="relative h-24 flex items-end gap-1 mb-10 overflow-hidden cursor-pointer">
                <div v-for="i in 60" :key="i" 
                    class="flex-1 bg-white/20 rounded-t-full transition-all duration-300"
                    :class="{'!bg-white': i < progress * 0.6}"
                    :style="{ height: `${20 + Math.random() * 80}%` }">
                </div>
                <!-- Playhead -->
                <div class="absolute h-full w-1 bg-white z-10 transition-all duration-300" :style="{ left: `${progress}%` }"></div>
            </div>

            <div class="flex items-center justify-between gap-6">
                <div class="flex items-center gap-6">
                    <button class="text-gray-500 hover:text-white transition-colors"><Repeat class="w-5 h-5" /></button>
                    <button class="text-gray-500 hover:text-white transition-colors"><SkipBack class="w-6 h-6" /></button>
                </div>
                
                <button @click="togglePlay" class="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_white] magnetic-btn">
                    <component :is="isPlaying ? Pause : Play" class="w-8 h-8 fill-current" />
                </button>

                <div class="flex items-center gap-6">
                    <button class="text-gray-500 hover:text-white transition-colors"><SkipForward class="w-6 h-6" /></button>
                    <button class="text-gray-500 hover:text-white transition-colors"><Volume2 class="w-5 h-5" /></button>
                </div>
            </div>
            
            <audio ref="audioRef" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" @timeupdate="updateProgress"></audio>
        </div>
      </div>

      <div class="flex-1 text-right max-w-lg">
        <h2 class="text-5xl font-extrabold tracking-tighter mb-8 leading-tight">Spatial awareness, <br><span class="text-gray-500">defined by you.</span></h2>
        <p class="text-xl text-gray-400 mb-8 leading-[1.4] text-balance">Our ambient demo showcases the 360-degree soundstage our drivers can produce. Wear headphones to experience the full effect.</p>
        <button class="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-2 ml-auto magnetic-btn">
          Explore the App <ArrowRight class="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
</template>
