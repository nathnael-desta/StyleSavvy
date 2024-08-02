<template>
    <navbar></navbar>

    <RouterView></RouterView>
</template>

<script setup>
import navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import { provide, ref, inject } from "vue";


let data = inject("$data");
let count = ref(data.getAllCart().length);
provide("count", count);

let pageNo = ref(0);
provide("pageNo", pageNo);

let cartOpen = ref(false);
provide("cartOpen", cartOpen);

let id = ref(0);
provide("id", id);

let clothingNo = ref(0);
provide("clothingNo", clothingNo)
</script>
