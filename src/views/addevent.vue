<template>


<section class="bg-gray-100">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
    

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
     <form @submit.prevent="creatEvent" class="space-y-4">
          <div>
            <label class="sr-only" for="name">title</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm" 
              placeholder="Name"
              type="text"
              id="name"
              v-model="title"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="date">date</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="date"
                type="date"
                id="date"
                name="date"
                v-model="date"
              />
            </div>

            <div>
              <label class="sr-only" for="location">location</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="location"
                type="text"
                id="location"
                name="location"
                v-model="location"
              />
            </div>

            <div>
              <label class="sr-only" for="type">type</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="type"
                type="text"
                id="type"
                name="type"
                v-model="type"
              />
            </div>
            <div>
              <label class="sr-only" for="competences">competences</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="competences"
                type="text"
                id="competences"
                name="competences"
                v-model="competences"
              />
            </div>
          </div>

       

          <div>
            <label class="sr-only" for=" description"></label>

            <textarea
              class="w-full rounded-lg border-gray-500 p-3 text-sm"
              placeholder=" description"
              rows="8"
              id=" description"
              name="description"
              v-model="description"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
          create 
            </button>
          </div>
        </form>
      </div>
    
      <div class="lg:col-span-2 lg:py-2">
  <div class="max-w-2xl mx-auto mb-2" v-for="event in events" :key="event.id">
    <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
      
      <div class="relative w-32 h-32 flex-shrink-0">
        <img class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="../assets/icon-association-youcare.png">
      </div>
      
      <div class="flex flex-col gap-2 py-2">
        <h2 class="text-xl font-bold">{{ event.title }}</h2>
        <p class="text-gray-500">{{ event.description }}</p>
        <span class="flex items-center justify-start text-gray-500">
          <a :href="event.type_url" target="_blank">Type: {{ event.type }}</a>
        </span>
        <div class="flex gap-2">
          <button @click="editEvent(event.id)" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </button>
          <button @click="deleteEvent(event.id)" class="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                            cx="17" cy="17" r="17" fill="" />
                        <path class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                            d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                            stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
                    </svg>
                </button>
        </div>
      </div>
    </div>
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
      title: "",
      description: "",
      date: "",
      location: "",
      type: "",
      competences: "",
      events: [] 
    };
  },
  mounted() {
    this.fetchEventsOfOrganizer();
  },
  methods: {
    async creatEvent() {
            try {
                const token = localStorage.getItem('token');

                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                const eventData = {
                    title: this.title,
                    description: this.description,
                    date: this.date,
                    location: this.location,
                    type: this.type,
                    competences: this.competences,
                };

                const response = await axios.post("http://127.0.0.1:8000/api/creatEvent", eventData, config);

                console.log(response);

                if (response.status === 200) {
                    router.push("/addevent");
                } else {
                    console.error("Store Event failed:", response.statusText);
                    router.push("/events");
                }
            } catch (error) {
                console.error("Error during Storing:", error);
            }
        },

    async fetchEventsOfOrganizer() {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const response = await axios.get("http://127.0.0.1:8000/api/organisator/events", config);
        if (response.status === 200) {
          this.events = response.data.event;
        } else {
          console.error("Failed to fetch events:", response.statusText);
        }
      } catch (error) {
        console.error("Error during fetching events:", error);
      }
    }
  }
};
</script>