<template>
  <div id="app">
    <ul id="nav" class="nav justify-content-center navbar-light">
      <li class="nav-item"><router-link class="nav-link" to="/">Olaylar</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/table">Tablo</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

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
#nav {
  position: fixed;
  padding: 5px 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #2c3e50;
  color: #ffffff;
  z-index: 99999;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
