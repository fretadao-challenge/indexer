<template>
  <q-page class="flex flex-center">
    <h1>Search Results</h1>
    <q-list v-for="item in searchResults" :key="item.username">
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{item.name[0].toUpperCase()}}
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>Shortened URL</q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-icon name="info"/>
          <q-icon name="edit"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProfileList',
  computed: {
    ...mapState({
      searchResults: state => state.search.searchResults,
    }),
  },
};
</script>

<style scoped>
</style>
