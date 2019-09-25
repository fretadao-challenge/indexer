<template>
  <q-page class="flex flex-center">
    <h1>Search Results</h1>
    <q-list v-for="profile in searchResults" :key="profile.username">
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{profile.name[0].toUpperCase()}}
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ profile.name }}</q-item-label>
          <q-item-label caption>Shortened URL</q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-icon @click="goToProfile(profile)" name="info"/>
          <q-icon name="edit"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';
import goToProfileMixin from '../mixins/helper';

export default {
  name: 'ProfileList',
  mixins: [goToProfileMixin],
  computed: {
    ...mapState({
      searchResults: state => state.search.searchResults,
    }),
  },
};
</script>

<style scoped>
</style>
