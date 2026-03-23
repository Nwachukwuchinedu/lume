<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowRight, Play, Pause } from 'lucide-vue-next';
import { useScrambleText } from '../utils/animations';

const isPlaying = ref(false);
const audioCtx = ref<AudioContext | null>(null);
const analyser = ref<AnalyserNode | null>(null);
const source = ref<MediaElementAudioSourceNode | null>(null);
const animationId = ref<number | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const audioRef = ref<HTMLAudioElement | null>(null);

const toggleAudio = () => {
  if (!audioRef.value) return;
  
  if (!audioCtx.value) {
    audioCtx.value = new (window.AudioContext || (window as any).webkitAudioContext)();
    analyser.value = audioCtx.value.createAnalyser();
    source.value = audioCtx.value.createMediaElementSource(audioRef.value);
    source.value.connect(analyser.value);
    analyser.value.connect(audioCtx.value.destination);
    analyser.value.fftSize = 256;
  }

  if (isPlaying.value) {
    audioRef.value.pause();
  } else {
    audioRef.value.play();
    if (audioCtx.value.state === 'suspended') {
      audioCtx.value.resume();
    }
    draw();
  }
  isPlaying.value = !isPlaying.value;
};

const draw = () => {
  if (!canvasRef.value || !analyser.value) return;
  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const bufferLength = analyser.value.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const renderFrame = () => {
    animationId.value = requestAnimationFrame(renderFrame);
    analyser.value!.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const val = dataArray[i];
      if (val === undefined) continue;
      barHeight = val / 2;
      ctx.fillStyle = `rgba(0, 0, 0, ${val / 255})`;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  };

  renderFrame();
};

onMounted(() => {
  const scramble = useScrambleText('.hero-text-main', 'Hear the unseen.');
  if (scramble) setTimeout(scramble, 1000);
});

onUnmounted(() => {
  if (animationId.value) cancelAnimationFrame(animationId.value);
});
</script>

<template>
  <section class="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
    <div class="max-w-4xl mx-auto z-10">
      <div class="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-8">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span class="text-xs font-semibold uppercase tracking-widest text-gray-500">Lume One Now Available</span>
      </div>
      
      <h1 class="hero-text text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] text-balance mb-6">
        <span class="hero-text-main">Hear the unseen.</span><br>
        <span class="text-gray-400">Feel the sound.</span>
      </h1>
      
      <p class="hero-subtext text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 text-balance">
        Experience spatial audio redefined. Sculpted from aerospace-grade aluminum and engineered for pure, unadulterated acoustic perfection.
      </p>
      
      <div class="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 magnetic-btn">
          Buy Now <ArrowRight class="w-5 h-5" />
        </button>
        <button @click="toggleAudio" class="w-full sm:w-auto bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 magnetic-btn">
          <component :is="isPlaying ? Pause : Play" class="w-5 h-5" /> {{ isPlaying ? 'Stop Demo' : 'Play Demo' }}
        </button>
      </div>
    </div>

    <!-- Audio Element Hidden -->
    <audio ref="audioRef" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" crossOrigin="anonymous"></audio>

    <!-- Visualizer Canvas -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <canvas ref="canvasRef" width="1000" height="400" class="w-full max-w-5xl"></canvas>
    </div>

    <!-- Floating Hero Image -->
    <div class="hero-image mt-20 w-full max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
      <div class="float-element absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-3xl z-0"></div>
      <div class="float-element absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-gray-400/30 to-black/30 rounded-full blur-3xl z-0" style="animation-delay: 1s;"></div>
      
      <div class="absolute inset-0 bg-black/5 z-10 rounded-3xl"></div>
      <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2000&auto=format&fit=crop" alt="Lume Headphones" class="w-full h-[400px] md:h-[600px] object-cover object-center rounded-3xl relative z-20">
    </div>
  </section>
</template>
