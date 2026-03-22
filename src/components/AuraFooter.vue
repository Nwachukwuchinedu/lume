<script setup lang="ts">
import { Twitter, Instagram, Youtube, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
    <div class="max-w-7xl mx-auto reveal-up">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div class="col-span-1 md:col-span-4">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span class="font-bold text-xl tracking-tight">AURA</span>
          </div>
          <p class="text-gray-500 text-sm mb-6 text-balance">The future of personal audio, designed for the minimalists and engineered for the purists.</p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Twitter class="w-4 h-4" /></a>
            <a href="#" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram class="w-4 h-4" /></a>
            <a href="#" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Youtube class="w-4 h-4" /></a>
          </div>
        </div>
        
        <div class="col-span-1 md:col-span-2 md:col-start-6">
          <h4 class="font-bold mb-4">Products</h4>
          <ul class="space-y-3 text-sm text-gray-500">
            <li><a href="#" class="hover:text-black transition-colors">Aura One</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Aura Buds</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Accessories</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Compare</a></li>
          </ul>
        </div>
        
        <div class="col-span-1 md:col-span-2">
          <h4 class="font-bold mb-4">Company</h4>
          <ul class="space-y-3 text-sm text-gray-500">
            <li><a href="#" class="hover:text-black transition-colors">Our Story</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Careers</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Press</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Contact</a></li>
          </ul>
        </div>

        <div class="col-span-1 md:col-span-3">
          <h4 class="font-bold mb-4">Stay in the loop</h4>
          <p class="text-sm text-gray-500 mb-4">Get the latest updates and early access to new products.</p>
          <div class="flex gap-2 relative">
            <input type="email" placeholder="Email address" class="bg-gray-50 border border-gray-200 rounded-full px-4 py-3 text-sm w-full focus:outline-none focus:border-black transition-colors pr-12">
            <button class="absolute right-1 top-1 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-105"><ArrowRight class="w-4 h-4" /></button>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400">
        <p>&copy; 2026 Aura Audio Inc. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
