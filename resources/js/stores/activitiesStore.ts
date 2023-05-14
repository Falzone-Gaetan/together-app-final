// stores/activitiesStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useLocationStore } from './locationStore';

export const useActivitiesStore = defineStore({
  id: 'activities',
  state: () => ({
    activities: [],
    categories: [],
  }),
  getters: {
    getActivitiesSortedByDistance: (state) => {
      return state.activities.slice().sort((a, b) => a.distance - b.distance);
    },
    getActivitiesSortedByDate: (state) => {
      return state.activities.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    
  },
  actions: {
    async fetchActivities() {
      const locationStore = useLocationStore();
      const { latitude, longitude } = locationStore.position.coords;
      if (!latitude || !longitude) return;
      const response = await axios.get('api/activities', {
        params: {
           latitude,
           longitude,
        },
      });
      const categoriesResponse = await axios.get('api/categories');
      this.categories = Object.values(categoriesResponse.data);
      this.activities = Object.values(response.data);
    },
  },
});