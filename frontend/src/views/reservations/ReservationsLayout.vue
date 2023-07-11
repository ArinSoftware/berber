<script setup>

</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-2xl lg:text-6xl font-black text-white">Barber</h1>
    <div class="flex flex-col space-y-5">
      <div class="flex gap-2 items-center justify-end">
        <p class="text-white text-right">Hi Username</p>
        <button type="button" class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-black rounded-lg">
          Sign Off
        </button>
      </div>
      <nav class="flex gap-2 items-center justify-end">
        <button class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg">My Reservations</button>
        <RouterLink class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-700"
          :to="{ name: 'new-reservation' }">New
          Reservation</RouterLink>
      </nav>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>
