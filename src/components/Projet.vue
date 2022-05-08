<script setup lang="ts">
import iconeLang from './IconeLang.vue'
import IconeLang from './IconeLang.vue';

    const props = defineProps({
        titre: {
            type: String,
            required: true
        },
        techno: { 
            type: String,
            required: true,
        }
    })

</script>

<template>
    <div class="bg-gray-400 bg-opacity-40 p-5 m-5 rounded-md w-1/2 text-black">
        <ul class="p-2 flex spaces">
            <li class="inline">
                <h1 class="font-bold"> {{titre}}</h1>
            </li>
            <li class="inline">
                <IconeLang :lang="techno" :simple="true"/>
            </li>
        </ul>
        <p>
            <slot></slot>
        </p>
    </div>
</template>
<style>
.spaces {
    justify-content: space-between;
}
</style>