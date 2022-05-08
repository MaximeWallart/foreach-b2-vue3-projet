<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <div class="h-full bg-gradient-to-b from-[#EAD8F6] to-[#BFD5E3] pb-60">
    <div class="py-52 font-extrabold border-b-1">
      <h1
        class="text-8xl bg-clip-text text-transparent bg-gradient-to-br from-[#9CBED3] to-[#DBBCF0] "
      >
      MAXIME WALLART
      </h1>
      <h2 class="pt-10">
        DÉVELOPPEUR FULLSTACK
      </h2>
    </div>
    <div class="mb-10">
      <ul class="list justify-center">
        <li class="holder mr-24">
          <RouterLink class="button" to="/">
            Expérience
          </RouterLink>
        </li>
        <li class="holder mx-24">
          <RouterLink class="button" to="/projets">
            Projets
          </RouterLink>
        </li>
        <li class="holder ml-24">
          <RouterLink class="button" to="/contacts">
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
.holder {
  padding: 20px;
  border-radius: 20px;
  color: black;
  background-color: white;
  padding-top: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  display: inline-block;
  vertical-align: middle;
}
.button {
  padding: 5px 100px 20px 100px;
}
</style>
