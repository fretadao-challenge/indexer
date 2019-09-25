<template>
  <q-page v-if="isEditing" class="flex flex-center">
    <ProfileEdit @edited="hasEdited()"/>
  </q-page>
  <q-page v-else class="flex flex-center">
    <q-card dark bordered class="text-primary my-card">
      <q-card-section vertical align="right">
        <q-btn round>
          <q-icon name="edit" @click="isEditing=true"/>
        </q-btn>
        <q-btn round class="q-ml-sm" @click="deleteProfile()">
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
import Mixin from '../mixins/helper';
import ProfileEdit from './ProfileEdit';

export default {
  name: 'Profile',
  mixins: [Mixin],
  components: {
    ProfileEdit,
  },
  data() {
    return {
      name: 'Profile twitter name',
      shortenedURL: 'bit.ly/asdf',
      username: '@profile-username',
      description: 'descriptiondescriptiondescriptiondescription',
      isEditing: false,
    };
  },
  methods: {
    hasEdited() {
      this.isEditing = false;
      this.getProfile();
    },
  },
  created() {
    this.getProfile();
  },

};
</script>

<style scoped>
</style>
