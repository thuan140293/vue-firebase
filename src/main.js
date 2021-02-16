// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store"

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyD2CY9UDXWdIoAVGgLmKsvXGvmKeT8WR-o",
  authDomain: "learningjs-d89aa.firebaseapp.com",
  databaseURL: "https://learningjs-d89aa.firebaseio.com",
  projectId: "learningjs-d89aa",
  storageBucket: "learningjs-d89aa.appspot.com",
  messagingSenderId: "198159944566",
  appId: "1:198159944566:web:3298ca93e766deec"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
