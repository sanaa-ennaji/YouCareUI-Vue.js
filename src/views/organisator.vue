<template>
    <div>
        <div v-if="fetchError">
            Error fetching data: {{ fetchError.message }}
        </div>
        <div v-else>
            <div v-if="isFetching">
                Fetching data...
            </div>
            <div v-else>
                <div v-for="postulation in postulations" :key="postulation.id">
                    <div class="postulation-card">
                        <h5>{{ postulation.status }}</h5>
                        <p>{{ postulation.user.name }}</p>
                        <p>{{ postulation.user.email }}</p>
                        <button @click="acceptPostulation(postulation.id, 'accepted')">Accept</button>
                        <button @click="acceptPostulation(postulation.id, 'refused')">Decline</button>
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
                        // Update the status of the postulation locally
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
