import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex, {

});

const app = new Vue({
  el: '#app',
  render: (h) => h(App),
});
