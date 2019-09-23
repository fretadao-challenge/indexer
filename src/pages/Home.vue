<template>
  <q-page class="flex flex-center">
    <h1>Profile Indexer</h1>
    <search-bar></search-bar>
  </q-page>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Home',
  components: {
    searchBar: SearchBar,
  },
};
</script>

<style scoped>
</style>
