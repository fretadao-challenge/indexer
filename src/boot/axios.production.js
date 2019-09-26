import Vue from 'vue';
import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'https://fretadao-api.herokuapp.com/',
});

Vue.prototype.$axios = HTTP;

export { HTTP };
