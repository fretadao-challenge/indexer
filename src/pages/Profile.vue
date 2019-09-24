<template>
  <q-page class="flex flex-center">
    <q-card dark bordered class="text-primary my-card">
      <q-card-section vertical align="right">
        <q-btn round>
          <q-icon name="edit"/>
        </q-btn>
        <q-btn round class="q-ml-sm">
          <q-icon name="delete"/>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">{{ name }}</div>
        <div class="text-subtitle2">a.k.a {{ username }}</div>
        <div class="text-subtitle2">{{ shortenedURL }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ description }}
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      name: 'Profile twitter name',
      shortenedURL: 'bit.ly/asdf',
      username: '@profile-username',
      description: 'descriptiondescriptiondescriptiondescription',
    };
  },
};
</script>

<style scoped>
</style>
