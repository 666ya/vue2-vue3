<template>Mouse position is at: {{ x }}, {{ y }}</template>

<script setup>
import { reactive } from "vue";
import { useMouse } from "./mouse.js";
console.log(useMouse());
const mouse = reactive(useMouse());
console.log(mouse);
const { x, y } = useMouse();
</script>

<style scoped></style>
