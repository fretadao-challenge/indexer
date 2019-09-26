<template>
  <q-page class="column justify-content-center">
    <div class="q-px-xl">
      <h1 class="text-center">Search Results</h1>
      <div v-if="searchResults.length < 1">
        <h3 class="text-blue-grey flex flex-center">No Results Found</h3>
      </div>
      <q-list v-else class="q-px-xl" v-for="profile in searchResults" :key="profile.username">
        <q-card flat>
          <q-item clickable @click="goToProfile(profile)">
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{profile.name[0].toUpperCase()}}
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ profile.name }}</q-item-label>
              <q-item-label caption>{{ profile.shortened_url  }}</q-item-label>
            </q-item-section>

            <q-item-section avatar>
              <q-icon name="visibility"/>
            </q-item-section>
          </q-item>
          <q-separator/>
        </q-card>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';
import Mixin from '../mixins/helper';

export default {
  name: 'ProfileList',
  mixins: [Mixin],
  computed: {
    ...mapState({
      searchResults: state => state.search.searchResults,
    }),
  },
};
</script>

<style scoped>
</style>
