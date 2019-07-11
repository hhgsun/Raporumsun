import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DrawerLayout from 'vue-drawer-layout'
require('dotenv').config()

import * as firebase from 'firebase/app'
import 'firebase/messaging'

//import store from './store'
import './registerServiceWorker'

Vue.use(DrawerLayout);
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/font-awesome.min.css'

const firebaseConfig = {
  apiKey: "AIzaSyAQrlFgIIoCISQOU0sTNF3O9cB_wIODUas",
  authDomain: "raporumsun.firebaseapp.com",
  databaseURL: "https://raporumsun.firebaseio.com",
  projectId: "raporumsun",
  storageBucket: "",
  messagingSenderId: "675586083383",
  appId: "1:675586083383:web:64b4154bb4ce7882"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey('BGAAztZ64f09gkrbN3n4WyFf1vmy-rbsZcTTDA7epMsjO7yDAbJLGIL6DCmD5UoAgnDNtDQRBMhkC-1Mz89O-VQ');

messaging.requestPermission().then(function(){
  // console.info("messaging.requestPermission: Allowed");
  /* messaging.getToken().then(function(token){
    console.log("getToken: ",token);
  }); */
}).catch(function(err){
  console.log(err);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
