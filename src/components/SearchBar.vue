<template>
  <q-input v-model="query"
           @keyup.enter="search()"
           ref="search"
           filled
           type="search"
           hint="Search">
    <q-icon name="search"/>
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
</style>
