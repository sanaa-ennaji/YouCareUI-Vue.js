<template>
    <section class="bg-gray-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="lg:col-span-2 lg:py-2">
          <div class="max-w-2xl mx-auto mb-2" v-for="event in events" :key="event.id">
            <div v-if="event.postulations && event.postulations.length > 0">
              <h2 class="text-xl font-bold mt-4">Postulations</h2>
              <ul>
                <li v-for="postulation in event.postulations" :key="postulation.id">
                  <p>{{ postulation.skills }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';
  
  export default {
    data() {
      return {
        events: [] 
      };
    },
    mounted() {
      this.fetchEventsOfOrganizer();
      this.fetchPostulationsOfEvent();
    },
    methods: {
      async fetchPostulationsOfEvent() {
        try {
          const token = localStorage.getItem('token');
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
  
          const response = await axios.get(`http://127.0.0.1:8000/api/events/postulations`, config);
          if (response.status === 200) {
            this.events = response.data.event;
          } else {
            console.error("Failed to fetch postulations:", response.statusText);
          }
        } catch (error) {
          console.error("Error during fetching postulations:", error);
        }
      }
    }
  };
  </script>
  