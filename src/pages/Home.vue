<template>
  <q-page class="column justify-content-center">
    <h1 class="text-center">Profile Indexer</h1>
    <div class="flex justify-center">
      <search-bar></search-bar>
    </div>
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
.justify-content-center {
  justify-content: center;
}
</style>
