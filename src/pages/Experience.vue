<script setup lang="ts">
// async function makeApiCall() {
//     const res = await fetch(
//         'https://discord.com/api/webhooks/964072600462589992/4aLDk7GGPVEQjOxNLwthTmMCkh2jXw-bw8UMYiuJgCjTfv2RDiW5lxJHykHIW76SH5r7'
//     ),
//     {
//         headers: { 'Content-Type': 'applicaiton/json'},
//         method: 'POST',
//         body: JSON.stringify({
//             content: content.value
//         })
//     }
// }
import iconeLang from '../components/IconeLang.vue'

const langs = [
  { lang: "Vue" },
  { lang: "Kotlin" },
  { lang: "Java" },
  { lang: "Flutter" },
  { lang: "Dart" },
  { lang: "JavaScript" },
];
</script>

<template>
  <h1 class="mb-7">Langages maitrisés :</h1>
  <transition-group name="list-complete" tag="p">
    <span
      v-for="(l, index) in langs"
      :key="l.lang"
      :data-index="index"
      class="transition-all duration-1000 inline-block mr-6"
    >
      <iconeLang :lang="l.lang" size="50px" ></iconeLang>
    </span>
  </transition-group>
</template>
