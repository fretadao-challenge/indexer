<template>
  <q-page class="q-mt-xl column justify-content-center">
    <h1 class="text-center">Register Profile</h1>
    <q-form
      @submit="onSubmit()"
      class="q-gutter-md profile-card register-profile"
    >
      <q-input
        filled
        v-model="name"
        label="Profile Name"
      />

      <q-input
        filled
        type="url"
        v-model="twitter_url"
        label="Twitter URL"
      />

      <div class="flex flex-center">
        <q-btn label="Submit"
               type="submit"
               color="primary"
               :loading="loading"
        />
      </div>
    </q-form>
  </q-page>

</template>

<script>
import { Notify } from 'quasar';
import { HTTP } from '../boot/axios.js';
import Mixin from '../mixins/helper';

export default {
  name: 'ProfileForm',
  mixins: [Mixin],
  data() {
    return {
      name: null,
      twitter_url: null,
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      HTTP.post('profiles', {
        profile: {
          name: this.name,
          twitter_url: this.twitter_url,
        },
      })
        .then((response) => {
          this.goToProfile(response.data);
          Notify.create({
            message: 'Profile successfully created',
            color: 'green',
            position: 'top-right',
          });
        })
        .catch((e) => {
          this.errors.push(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};

</script>

<style scoped>
.register-profile {
  max-width: 80%;
  min-width: 60%;
  margin: 0 auto;
}
</style>
