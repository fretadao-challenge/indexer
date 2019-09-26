<template>
  <q-input v-model="query"
           @keyup.enter="search()"
           ref="search"
           filled
           label="Type a Twitter username, name or description"
           type="search"
           class="search-bar"
           :dense="dense"
           >
    <template v-slot:append>
      <q-icon name="search"/>
    </template>
  </q-input>
</template>

<script>
import { HTTP } from '../boot/axios.js';

export default {
  name: 'SearchBar',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      HTTP.get('search', {
        params: {
          query: this.query,
        },
      })
        .then((response) => {
          const { data } = response;
          this.$store.dispatch('searchResults', { searchResults: data });
          this.$router.push({ name: 'ProfileList' });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style scoped>
.search-bar {
  max-width: 80%;
  min-width: 60%;
}
</style>
