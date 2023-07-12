import api from '../lib/axios.js';

export default {
  all() {
    return api.get('/services');
  },
};
