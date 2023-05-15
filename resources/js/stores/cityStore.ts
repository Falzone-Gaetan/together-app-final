import { defineStore } from "pinia";
import axios from "axios";

export const useCityStore = defineStore("location", {
  state: () => ({
    position: null,
    city: null,
    error: null,
  }),
  actions: {
    async fetchPositionByCity(city) {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=ca2f15b5d3d0e5d347f3681e1ce225a3`
        );
        const position = {
          latitude: response.data[0].lat,
          longitude: response.data[0].lon,
        };
        this.position = position;
        this.location = response.data[0].name;
      } catch (error) {
        this.error = error;
      }
    },
  },
});