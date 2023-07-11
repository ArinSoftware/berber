<script setup>
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <nav class="my-5 flex gap-3">
    <RouterLink :to="{ name: 'new-reservation' }"
      class="flex-1 text-center p-3 uppercase font-bold hover:bg-blue-600 hover:text-white"
      :class="route.name === 'new-reservation' ? 'text-white bg-blue-500' : 'bg-white text-blue-500'">
      Services
    </RouterLink>
    <RouterLink :to="{ name: 'reservation-details' }"
      class="flex-1 text-center p-3 uppercase font-bold hover:bg-blue-600 hover:text-white"
      :class="route.name === 'reservation-details' ? 'text-white bg-blue-500' : 'bg-white text-blue-500'">
      Details
    </RouterLink>
  </nav>

  <RouterView />
</template>