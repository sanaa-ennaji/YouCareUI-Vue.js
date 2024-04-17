<template>
<nav class="mb-20 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../assets/icon-association-youcare.png" class="h-8" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">youcare</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">events</a>
      </li>
      <!-- <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li> -->
    </ul>
  </div>
  </div>
</nav> 
<div v-if="flashMessage"
            class=" p-4 mb-4  text-sm  fixed left-10 top-20 text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
            role="alert">
            {{ flashMessage }}
        </div>
<form @submit.prevent="searchEvents" class="max-w-md mx-auto mt-20">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input v-model="searchParams.query" type="text" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by location or type ..." required />
      <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  </form>




<div class="heading text-center font-bold text-2xl m-5 text-gray-100">Available Events</div>

<div class="holder mx-auto w-11/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
 
  <div v-for="(event, index) in events" :key="index" class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
    <div v-if="event.live" class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">Live</div>
    

    <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
      <span class="mr-1 p-1 px-2 font-bold">{{ event.date }} </span>
      <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">{{ event.location }}</span>
      <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">{{ event.type }}</span>
    </div>

    <div class="desc p-4 text-gray-800">
      <a :href="event.titleURL" target="_new" class="title font-bold block cursor-pointer hover:underline">{{ event.title }}</a>
      <a href="" target="_new"  class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">@organisator</a>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{{ event.description }}</span>
      
  
      <div>
        <input v-model="skills[index]" type="text" placeholder="Skills" class="border border-gray-400 p-1 rounded">
        <button @click="postulate(event.id, skills[index])" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded ml-2">Postulate</button>
      </div>
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
    fetchError: null,
    flashMessage: null,
    skills: [] ,
    searchParams: {
        query: ''
      }
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
    
        this.skills = new Array(this.events.length).fill('');
        this.isFetching = false;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.fetchError = error;
        this.isFetching = false;
      });
  },
  postulate(eventId, skills) {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.post('http://127.0.0.1:8000/api/postulation', { event_id: eventId, skills }, config)
      .then(response => {
        this.flashMessage = 'Postulation done successfully';
                    setTimeout(() => {
                        this.flashMessage = null;
                    }, 3000);
      })
      .catch(error => {
        console.error('Error postulating:', error);
        
      });
  },

  searchEvents() {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      console.log('Search query:', this.searchParams.query);

      this.isFetching = true;

      axios.get('http://127.0.0.1:8000/api/event/search', {
    params: { query: this.searchParams.query },
    headers: config.headers
})
.then(response => {
    console.log('Search Results:', response.data); 
    this.events = response.data.events;
    this.isFetching = false;
})
.catch(error => {
    console.error('Error searching events:', error);
    this.fetchError = error;
    this.isFetching = false;
});

    }
  }
};
 
</script>