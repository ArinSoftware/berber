<script setup>
import SelectedService from '../../components/SelectedService.vue';
import { formatCurrency } from '../../helpers';
import { useAppointmentsStore } from "../../stores/appointments";

const appointments = useAppointmentsStore();

</script>

<template>
  <div>
    <h2 class="text-4xl font-extrabold text-white">Lorem Ipsum</h2>
    <p class="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    <h3 class="text-3xl font-extrabold text-white">Services</h3>

    <div class="grid gap-5">
      <SelectedService v-for="service in appointments.services" :key="service._id" :service="service" />
      <p class="text-right text-white text-2xl">Total Payment:
        <span class="font-black">{{ formatCurrency(appointments.totalAmount) }}</span>
      </p>
    </div>

  </div>
</template>