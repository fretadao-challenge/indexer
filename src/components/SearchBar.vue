<template>
  <q-input v-model="query"
           @keyup.enter="search()"
           ref="search"
           :loading="loading"
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
      loading: false,
    };
  },
  methods: {
    search() {
      this.loading = true;
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
        })
        .finally(() => {
          this.loading = false;
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
