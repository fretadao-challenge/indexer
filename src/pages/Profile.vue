<template>
  <q-page v-if="isEditing" class="flex flex-center">
    <ProfileEdit @edited="hasEdited()"/>
  </q-page>
  <q-page v-else class="flex flex-center">
    <q-card dark bordered class="profile-card text-primary my-card">
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
        <div class="text-subtitle2">a.k.a @{{ username }}</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">{{ shortened_url }}</div>
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
      name: '',
      shortened_url: '',
      username: '',
      description: '',
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

<style>
.profile-card {
  min-width: 50%;
  padding: 30px;
}
</style>
