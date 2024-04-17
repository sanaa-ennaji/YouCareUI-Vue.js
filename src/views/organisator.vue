<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
      <div v-if="fetchError" class="bg-red-100 text-red-500 p-4 rounded text-center col-span-full">
        Error fetching data: {{ fetchError.message }}
      </div>
      <div v-else class="flex flex-col gap-4 col-span-full">
        <div v-if="isFetching" class="flex items-center justify-center h-24 rounded col-span-full">
          Fetching data ...
        </div>
        <div v-else>
          <div v-for="postulation in postulations" :key="postulation.id" class="postulation-card bg-white rounded shadow-md">
            <div class="p-4 border-b border-gray-200">
              <h5 class="text-xl font-medium mr-4">{{ postulation.status }}</h5>
              <p class="text-gray-600">{{ postulation.user.name }}</p>
              <p class="text-gray-600 ml-4">{{ postulation.user.email }}</p>
            </div>
            <div class="flex justify-end p-4">
              <button @click="acceptPostulation(postulation.id, 'accepted')" class="bg-green-500 text-white hover:bg-green-700 font-medium py-2 px-4 rounded focus:outline-none">Accept</button>
              <button @click="acceptPostulation(postulation.id, 'refused')" class="bg-red-500 text-white hover:bg-red-700 font-medium py-2 px-4 rounded focus:outline-none ml-2">Decline</button>
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
                        console.log('Postulation accepted successfully');
                        
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
                    console.error('Error accepting postulation:', error);
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
