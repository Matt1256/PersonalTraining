import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
import {fb} from './firebase';
import VueFirestore from 'vue-firestore';
import Swal from 'sweetalert2';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

window.$ = window.jQuery = jQuery;

import 'popper.js';
import'./assets/app.scss';

Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
})

window.Swal = Swal;

Vue.component('Navbar', require('./components/navBar.vue').default);

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){

    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

  }

});


