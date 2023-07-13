<script setup>
import { useServicesStore } from "../../stores/services.js"
const services = useServicesStore();
</script>

<template>
  <h2 class="text-4xl font-extrabold text-white mt-10">Services</h2>
  <p class="text-white text-lg mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <div class="grid grid-cols-2 gap-5 mt-5"></div>
</template>