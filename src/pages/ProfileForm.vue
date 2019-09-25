<template>
  <q-page class="flex flex-center">
    <h1>Register Profile</h1>
    <q-form
      @submit="onSubmit()"
      class="q-gutter-md"
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
        />
      </div>
    </q-form>
  </q-page>

</template>

<script>
import { HTTP } from '../boot/axios.js';
import goToProfileMixin from '../mixins/helper';

export default {
  name: 'ProfileForm',
  mixins: [goToProfileMixin],
  data() {
    return {
      name: null,
      twitter_url: null,
    };
  },
  methods: {
    onSubmit() {
      HTTP.post('profiles', {
        profile: {
          name: this.name,
          twitter_url: this.twitter_url,
        },
      })
        .then((response) => {
          this.goToProfile(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};

</script>

<style scoped>
</style>
