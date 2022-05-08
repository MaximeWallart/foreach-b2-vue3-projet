<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <div class="h-screen bg-gradient-to-b from-[#EAD8F6] to-[#BFD5E3]">
    <h1
      class="text-8xl py-28 font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#9CBED3] to-[#DBBCF0]"
    >
      MAXIME WALLART
    </h1>
    <div class="menu mt-10 mb-10">
      <ul class="list justify-center">
        <li class="mr-24">
          <RouterLink class="button bg-[#FEE9E1]  bg-opacity-50" to="/">
            Expérience
          </RouterLink>
        </li>
        <li class="mx-24">
          <RouterLink class="button bg-[#FEE9E1]  bg-opacity-50" to="/projets">
            Projets
          </RouterLink>
        </li>
        <li class="ml-24">
          <RouterLink class="button bg-[#FEE9E1] bg-opacity-50" to="/contacts">
            Contacts
          </RouterLink>
        </li>
      </ul>
    </div>
    <RouterView/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.list {
  display: flex;
  flex-direction: row;
}
.button {
  padding: 10px;
  border-radius: 10px;
}
</style>
