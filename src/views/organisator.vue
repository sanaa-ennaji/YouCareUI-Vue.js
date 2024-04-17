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
<div class="heading text-center font-bold text-2xl m-5 mx-auto mt-20">Postulations for your events</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 ">
      
      <div v-if="fetchError" class="bg-red-100 text-red-500 p-4 rounded text-center col-span-full">
        Error fetching data: {{ fetchError.message }}
      </div>
      <div v-else class="flex flex-col  col-span-full">
        <div v-if="isFetching" class="flex items-center justify-center h-24 rounded col-span-full">
          Fetching data ...
        </div>
        <div v-else class="holder mx-auto w-11/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 gap-10">
          <div v-for="postulation in postulations" :key="postulation.id" class="postulation-card bg-white rounded shadow-md inline-block w-full sm:w-auto">
            <div class="p-4 border-b border-gray-200">
              <h5 class="text-xl font-medium mr-4">{{ postulation.event.title }}</h5>
              <p class="text-gray-600"> benevole :{{ postulation.user.name }}</p>
              <p class="text-gray-600 ">status : {{ postulation.status }}</p>
            </div>
            <div class="flex justify-between p-4">
              <button @click="acceptPostulation(postulation.id, 'accepted')" class="bg-green-500 text-white hover:bg-green-700 font-medium py-2 px-4 rounded focus:outline-none">Accept</button>
              <button @click="acceptPostulation(postulation.id, 'rejected')" class="bg-red-500 text-white hover:bg-red-700 font-medium py-2 px-4 rounded focus:outline-none ml-2">Decline</button>
            </div>
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
            postulations: [],
            isFetching: false,
            fetchError: null
        };
    },
    mounted() {
        this.fetchPostulations();
    },
    methods: {
        fetchPostulations() {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            this.isFetching = true;

            axios.get('http://127.0.0.1:8000/api/organisator/postulations', config)
                .then(response => {
                    console.log('Data:', response.data);
                    this.postulations = response.data.postulations;
                    this.isFetching = false;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this.fetchError = error;
                    this.isFetching = false;
                });
        },
        acceptPostulation(postulationId, status) {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            axios.put(`http://127.0.0.1:8000/api/accepte/${postulationId}`, { status }, config)
                .then(response => {
                    if (response.status === 200) {
                        console.log('Postulation updated successfully');
                        
                        const updatedPostulations = this.postulations.map(post => {
                            if (post.id === postulationId) {
                                return { ...post, status };
                            }
                            return post;
                        });
                        this.postulations = updatedPostulations;
                    } else {
                        console.error('Failed to accept postulation:', response.statusText);
                    }
                })
                .catch(error => {
                    console.error('Error updating postulation:', error);
                });
        }
    }
};
</script>

<style>
.postulation-card {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
