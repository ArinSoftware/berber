<script setup>
import ServiceItem from '../../components/ServiceItem.vue'
import { useServicesStore } from "../../stores/services.js"
const store = useServicesStore();
</script>

<template>
  <h2 class="text-4xl font-extrabold text-white mt-10">Services</h2>
  <p class="text-white text-lg mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <div class="grid grid-cols-2 gap-5 mt-5">
    <ServiceItem v-for="service in store.services.services" :key="service._id" :service="service" />
  </div>
</template>