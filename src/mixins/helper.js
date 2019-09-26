import { HTTP } from '../boot/axios.js';

const Mixin = {
  methods: {
    goToProfile(profile) {
      this.$router.push({ name: 'Profile', params: { id: profile.id } });
    },
    goToProfileEdit() {
      this.$router.push({ name: 'ProfileEdit' });
    },
    deleteProfile() {
      HTTP.delete(`profiles/${this.$route.params.id}`)
        .then(() => {
          this.$router.push({ name: 'Home' });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getProfile() {
      HTTP.get(`profiles/${this.$route.params.id}`)
        .then((response) => {
          const { data } = response;
          this.name = data.name;
          this.shortened_url = data.shortened_url;
          this.username = data.username;
          this.description = data.description;
          this.twitter_url = data.twitter_url;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};

export default Mixin;
