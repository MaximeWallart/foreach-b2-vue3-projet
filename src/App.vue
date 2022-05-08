<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div bg="rose-100" class="h-screen">
    <h1 class="text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-purple-700 text-6xl">
      MAXIME WALLART
    </h1>
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
