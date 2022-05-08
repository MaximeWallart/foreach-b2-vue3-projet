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
import VueLogo from "~icons/logos/vue";
import KotlinLogo from "~icons/vscode-icons/file-type-kotlin";
import JavaLogo from "~icons/logos/java";
import JSLogo from "~icons/logos/javascript";
import FlutterLogo from "~icons/logos/flutter";
import DartLogo from "~icons/logos/dart";

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
  <h1>Langages maitrisés :</h1>
  <transition-group name="list-complete" tag="p">
    <span
      v-for="(l, index) in langs"
      :key="l.lang"
      :data-index="index"
      class="transition-all duration-1000 inline-block mr-6"
    >
      <div v-if="l.lang === 'Vue'">
        <VueLogo />
      </div>
      <div v-else-if="l.lang === 'Kotlin'">
        <KotlinLogo />
      </div>
      <div v-if="l.lang === 'Java'">
        <JavaLogo />
      </div>
      <div v-else-if="l.lang === 'Dart'">
        <DartLogo />
      </div>
      <div v-if="l.lang === 'JavaScript'">
        <JSLogo />
      </div>
      <div v-else-if="l.lang === 'Flutter'">
        <FlutterLogo />
      </div>
      <h4 mt-4>{{ l.lang }}</h4>
    </span>
  </transition-group>
</template>
