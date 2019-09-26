<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title
          @click="$router.push('/')"
          class="link-title text-center"
        >
          Profile Indexer
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Useful Links</q-item-label>
        <q-item clickable tag="a" @click="goBack()">
          <q-item-section avatar>
            <q-icon name="chevron_left" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Return</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item clickable tag="a" @click="goToProfileForm()">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Add Profile</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    goToProfileForm() {
      this.$router.push({ name: 'ProfileForm' });
    },
    goBack() {
      window.history.go(-1);
    },
  },
};
</script>

<style scoped>
.link-title {
  cursor: pointer;
}
</style>
