<template>
  <div class="heading text-center font-bold text-2xl m-5 text-gray-100">Full Responsive Video Cards</div>

  <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    <div v-for="(event, index) in events" :key="index" class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
      <div v-if="event.live" class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">Live</div>
      <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
        <span class="mr-1 p-1 px-2 font-bold">{{ event.watching }} Watching</span>
        <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">{{ event.likes }} Likes</span>
        <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">{{ event.dislikes }} Dislikes</span>
      </div>
      <div class="desc p-4 text-gray-800">
        <a :href="event.videoUrl" target="_new" class="title font-bold block cursor-pointer hover:underline">{{ event.title }}</a>
        <a :href="event.channelUrl" target="_new" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">@{{ event.channel }}</a>
        <span class="description text-sm block py-2 border-gray-400 mb-2">{{ event.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
      isFetching: false,
      fetchError: null
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      this.isFetching = true;

      axios.get('http://127.0.0.1:8000/api/event', config)
        .then(response => {
          console.log('Data:', response.data);
          this.events = response.data.event; 
          this.isFetching = false;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.fetchError = error;
          this.isFetching = false;
        });
    }
  }
};
</script>


