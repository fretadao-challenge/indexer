<template>
  <q-page class="flex flex-center">
    <q-card dark bordered class="text-primary my-card">
      <q-card-section vertical align="right">
        <q-btn round>
          <q-icon name="edit"/>
        </q-btn>
        <q-btn round class="q-ml-sm">
          <q-icon name="delete" @click="deleteProfile()"/>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">{{ this.name }}</div>
        <div class="text-subtitle2">a.k.a {{ this.username }}</div>
        <div class="text-subtitle2">{{ this.shortenedURL }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ this.description }}
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
import { HTTP } from '../boot/axios.js';

export default {
  name: 'Profile',
  data() {
    return {
      name: 'Profile twitter name',
      shortenedURL: 'bit.ly/asdf',
      username: '@profile-username',
      description: 'descriptiondescriptiondescriptiondescription',
    };
  },
  methods: {
    getProfile() {
      console.log(this.$route.params.id);
      HTTP.get(`profiles/${this.$route.params.id}`)
        .then((response) => {
          const { data } = response;
          this.name = data.name;
          this.username = data.username;
          this.description = data.description;
          this.shortenedURL = data.shortenedURL;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    deleteProfile() {
      HTTP.delete(`profiles/${this.$route.params.id}`)
        .then(() => {
          this.$router.push({ name: 'Home' });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  created() {
    this.getProfile();
  },

};
</script>

<style scoped>
</style>
