<template>
  <q-page class="flex flex-center">
    <h1>Search Results</h1>
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            M
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Member name</q-item-label>
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

export default {
  name: 'ProfileList',
};
</script>

<style scoped>
</style>
