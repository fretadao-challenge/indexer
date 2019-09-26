<template>
  <q-card dark bordered class="profile-card text-primary my-card">
    <q-card-section vertical align="right">
      <q-btn label="Delete"
             color="red"
             outline
             icon="delete"
             @click="deleteProfile()"/>
    </q-card-section>
    <q-card-section>
      <q-form
      @submit="editProfile()"
      class="q-gutter-md"
      >
        <q-input filled v-model="name" label="Name" />
        <q-input filled v-model="twitter_url" label="Twitter URL" />
        <div class="q-mt-xl row justify-around">
          <q-btn label="Save"
                type="submit"
                color="primary"
                class="q-px-xl"
          />
          <q-btn label="Cancel"
                @click="$emit('edited')"
                color="grey"
                class="q-px-xl"
          />
        </div>
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
