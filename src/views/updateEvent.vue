<template></template>
 <!--  <section class="min-h-screen">

      <div class="max-w-4xl mx-auto font-[sans-serif] mt-12 text-[#333] p-6">
          <div class="text-center mb-16">
              <a href="javascript:void(0)"><img src="../assets/icon-association-youcare.png" alt="logo" class='w-52 inline-block' />
              </a>
              <h4 class="text-base font-semibold mt-3">Update Event Here !!</h4>
          </div>
          <form @submit.prevent="updateEvent">
              <div class="grid sm:grid-cols-2 gap-y-7 gap-x-12">
                  <div>
                      <label class="text-sm mb-2 block">Title</label>
                      <input name="title" type="text" v-model="events.title"
                          class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                          placeholder="Enter title" />
                  </div>
                  <div>
                      <label class="text-sm mb-2 block">Type</label>
                      <input name="type" type="text" v-model="events.type"
                          class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                          placeholder="Enter type" />
                  </div>
                  <div>
                      <label class="text-sm mb-2 block">Date</label>
                      <input name="date" type="date" v-model="events.date"
                          class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                          placeholder="Enter email" />
                  </div>
                  <div>
                      <label class="text-sm mb-2 block">Localisation</label>
                      <input name="localisation" type="text" v-model="events.localisation"
                          class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                          placeholder="Enter mobile number" />
                  </div>
                  <div>
                      <label class="text-sm mb-2 block">competence</label>
                      <input name="competence" type="text" v-model="events.competence"
                          class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                          placeholder="Enter password" />
                  </div>
                  <div>
                      <label class="text-sm mb-2 block">description</label>
                      <textarea name="description" v-model="events.description"
                          class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                          placeholder="Enter confirm password"></textarea>
                  </div>
              </div>
              <div class="!mt-10">
                  <button type="submit"
                      class="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-[#EEBB07] hover:bg-[#EEBB07]/70 focus:outline-none">
                      Update Event
                  </button>
              </div>
          </form>
      </div>
  </section>
</template>
<script>
import axios from 'axios';
import router from '@/router';

export default {

  name: "Register",
  data() {
      return {
          idEvent: "",
          events: {
              title: "",
      description: "",
      date: "",
      location: "",
      type: "",
      competences: "",
          }

      };
  },

  mounted() {
      this.idEvent = this.$route.params.id;
      this.getEventData(this.$route.params.id)
  },
  methods: {

      getEventData(eventId) {
          const token = localStorage.getItem('token');

          const config = {
              headers: { Authorization: `Bearer ${token}` }
          };
      },

      async updateEvent() {
          try {
              const token = localStorage.getItem('token');

              const config = {
                  headers: { Authorization: `Bearer ${token}` }
              };

              const eventData = {
                  title: this.events.title,
                  type: this.events.type,
                  date: this.events.date,
                  localisation: this.events.localisation,
                  competence: this.events.competence,
                  description: this.events.description,
              };

              const response = await axios.put(`http://127.0.0.1:8000/api/updateEvent/${this.idEvent}`, eventData, config);

              console.log(response);

              if (response.status === 200) {
                  router.push("/register");
              } else {
                  console.error("Store Event failed:", response.statusText);
                  router.push("/addevent");
              }
          } catch (error) {
              console.error("Error during Storing:", error);
          }
      },

  },
};
</script> -->
