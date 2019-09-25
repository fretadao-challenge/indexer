const goToProfileMixin = {
  methods: {
    goToProfile(profile) {
      this.$router.push({ name: 'Profile', params: { id: profile.id } });
    },
  },
};

export default goToProfileMixin;
