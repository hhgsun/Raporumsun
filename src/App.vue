<template>
  <div id="app">
    <vue-drawer-layout ref="drawerLayout" @mask-click="handleMaskClick(false)">
      
      <div class="vue-drawer h-100 bg-dark position-relative" slot="drawer">
        <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
          <div class="navbar-brand col-sm-3 col-md-2 mr-0"><span class="badge badge-secondary">RaporumSun</span></div>
        </nav>

        <div class="list-group m-2">
          <router-link class="list-group-item list-group-item-action" exact-active-class="active" to="/">Olaylar</router-link>
          <router-link class="list-group-item list-group-item-action" exact-active-class="active" to="/table">Tablo</router-link>
        </div>
      </div>

      <div class="main-content" slot="content">
        <nav class="navbar navbar-dark justify-content-start fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="mx-3" href="#" @click="handleMaskClick(true)"><span class="navbar-toggler-icon"></span></a>
          <a class="navbar-brand mr-3" href="#">{{ title }} <span v-if="badge" class="badge badge-secondary">{{ badge }}</span></a>
          <div class="ml-auto mr-3">
            <div v-if="notifications.length > 0" class="spinner-grow text-warning float-left" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <button v-if="refreshBtn" class="btn btn-outline-secondary btn-sm float-right ml-2" @click="refreshApp()" type="button">
              <i class="fa fa-refresh"></i>
            </button>
          </div>
        </nav>

        <router-view/>

        <!-- Bildirim Kutuları -->
        <!-- <div aria-live="polite" aria-atomic="true">
          <div style="position: absolute; top: 5px; right: 5px; z-index:999999; min-width: 200px;">
            <div v-for="(not, index) in notifications" :key="index" class="toast" role="alert" aria-live="assertive" aria-atomic="true" style="opacity:1;">
              <div class="toast-header">
                <img :src="not.icon" class="rounded mr-1" alt="Yeni Bildirim" style="width:20px">
                <strong class="mr-auto">{{not.title}}</strong>
                <button type="button" class="ml-2 mb-1 px-2 close" data-dismiss="toast" aria-label="Close" @click="removeNotif(index)">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="toast-body py-1 px-2" v-if="not.body">{{not.body}}</div>
            </div>
          </div>
        </div> --><!-- .polite -->

      </div>

    </vue-drawer-layout>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/messaging'
import { clearInterval } from 'timers';

export default {
  data(){
    return {
      title: 'Başlangıç',
      badge: '',
      notifications: [],
      refreshBtn: false,
    }
  },
  methods: {
    handleMaskClick(bool){
      this.$refs.drawerLayout.toggle(bool);
    },
    removeNotif(index){
      this.notifications.splice(index, 1);
    },
    refreshApp(){
      window.location.reload();
    }
  },
  watch: {
    $route(to){
      this.title = to.name;
      this.badge = to.meta.badge;
      this.$refs.drawerLayout.toggle();
    }
  },
  created(){
    const self = this;
    var count = 0;
    var intervalList = [];
    // ON MESSAGE EVENT
    firebase.messaging().onMessage(function(notif){
      self.notifications.push({
        title: notif.notification.title
      });/* {title: notif.notification.title, body: notif.notification.body, icon: notif.notification.icon} */
      
      intervalList[count] = setInterval(function(){
        self.notifications.pop();
        clearInterval(intervalList[count]);
      }, 3000);
      count = count + 1;

      self.refreshBtn = true;
    });
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 50px;
  padding-bottom: 70px;
}

.main-content {
  overflow-x: hidden !important;
  overflow-y: auto;
  padding-top: 40px;
  height: 100% !important;
}

.navbar {
  z-index: 817 !important;
}

.drawer-wrap {
  max-width: 80% !important;
}

@media only screen and (min-width: 700px) {
  .drawer-wrap {
    max-width: 350px !important;
  }
}

</style>
