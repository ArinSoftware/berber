import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAppointmentsStore = defineStore('appointments', () => {
  const services = ref([]);

  function onServiceSelected(service) {
    services.value.push(service);
  }

  return {
    onServiceSelected,
  };
});
