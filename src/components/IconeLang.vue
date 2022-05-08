<script setup lang="ts">
import VueLogo from "~icons/logos/vue";
import KotlinLogo from "~icons/vscode-icons/file-type-kotlin";
import JavaLogo from "~icons/logos/java";
import JSLogo from "~icons/logos/javascript";
import FlutterLogo from "~icons/logos/flutter";
import DartLogo from "~icons/logos/dart";

defineProps({
  lang: {
    type: String,
    required: true,
  },
  size: {
      type: String,
  },
  simple: {
    type: Boolean
  }
});
</script>
<template>
  <div v-if="lang === 'Vue'">
    <VueLogo />
  </div>
  <div v-else-if="lang === 'Kotlin'">
    <KotlinLogo font-size=size />
  </div>
  <div v-if="lang === 'Java'">
    <JavaLogo />
  </div>
  <div v-else-if="lang === 'Dart'">
    <DartLogo />
  </div>
  <div v-if="lang === 'JavaScript'">
    <JSLogo />
  </div>
  <div v-else-if="lang === 'Flutter'">
    <FlutterLogo />
  </div>
  <h4 v-if="!simple" mt-4>{{ lang }}</h4>
</template>
