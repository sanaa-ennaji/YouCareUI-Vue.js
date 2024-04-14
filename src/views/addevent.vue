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
        
     <div class="max-w-2xl mx-auto mb-2">
    <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

        <div class="relative w-32 h-32 flex-shrink-0">
            <img class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="https://via.placeholder.com/150">
        </div>

        <div class="flex flex-col gap-2 py-2">
            <p class="text-xl font-bold">Post title</p>

            <p class="text-gray-500">
                Description of your post/article,
             
            </p>

            <span class="flex items-center justify-start text-gray-500">
                <svg class="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                </svg>
                <a href="amitpachange.com" target="_blank">amitpachange.com</a>
            </span>
        </div>
    </div>
</div>


<div class="max-w-2xl mx-auto">
    <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

        <div class="relative w-32 h-32 flex-shrink-0">
            <img class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="https://via.placeholder.com/150">
        </div>

        <div class="flex flex-col gap-2 py-2">
            <p class="text-xl font-bold">Post title</p>

            <p class="text-gray-500">
                Description of your post/article,
             
            </p>

            <span class="flex items-center justify-start text-gray-500">
                <svg class="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                </svg>
                <a href="amitpachange.com" target="_blank">amitpachange.com</a>
            </span>
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
        };

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

    },
};
</script>