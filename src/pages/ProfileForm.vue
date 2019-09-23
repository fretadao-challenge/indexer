<template>
  <q-page class="flex flex-center">
    <h1>Register Profile</h1>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Profile Name"
      />

      <q-input
        filled
        type="url"
        v-model="url"
        label="Twitter URL"
      />

      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
  </q-page>

</template>

<script>

export default {
  name: 'ProfileForm',
  data() {
    return {
      name: null,
      url: null,
    };
  },
  methods: {
    onSubmit() {
    },
  },
};

</script>

<style scoped>
</style>
