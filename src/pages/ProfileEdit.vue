<template>
  <q-card dark bordered class="text-primary my-card">
    <q-card-section vertical align="right">
      <q-btn round class="q-ml-sm">
        <q-icon name="delete" @click="deleteProfile()"/>
      </q-btn>
    </q-card-section>
    <q-card-section>
      <q-form
      @submit="editProfile()"
      class="q-gutter-md"
      >
        <q-input filled v-model="name" label="Name" />
        <q-input filled v-model="twitter_url" label="Twitter URL" />
        <q-btn label="Save"
               type="submit"
               color="primary"
        />
      </q-form>
    </q-card-section>

    <q-separator dark inset />

  </q-card>
</template>

<script>
import { HTTP } from '../boot/axios.js';
import Mixin from '../mixins/helper';

export default {
  name: 'ProfileEdit',
  mixins: [Mixin],
  data() {
    return {
      name: '',
      twitter_url: '',
    };
  },
  methods: {
    editProfile() {
      HTTP.put(`profiles/${this.$route.params.id}`, {
        name: this.name,
        twitter_url: this.twitter_url,
      })
        .then(() => {
          this.$emit('edited');
          this.$router.push({ name: 'Profile' });
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
