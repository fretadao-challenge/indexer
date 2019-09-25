import Vue from 'vue';
import axios from 'axios';

const HTTP = axios.create({
  baseURL: `http://${window.location.hostname}:3000/`,
});

Vue.prototype.$axios = HTTP;

export { HTTP };
