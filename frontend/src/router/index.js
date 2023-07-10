import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReservationsLayout from '../views/reservations/ReservationsLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: ReservationsLayout,
      children: [
        {
          path: 'new',
          component: () =>
            import('../views/reservations/NewReservationLayout.vue'),
          children: [
            {
              path: '',
              name: 'new-reservation',
              component: () => import('../views/reservations/ServicesView.vue'),
            },
            {
              path: 'details',
              name: 'reservation-details',
              component: () =>
                import('../views/reservations/ReservationView.vue'),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
