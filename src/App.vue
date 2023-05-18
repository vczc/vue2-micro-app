<template>
  <div class="main-container">
    <div class="nav" v-if="token">
      <div class="menu">
        <router-link to="/">Child Home</router-link>
      </div>
      <div class="menu">
        <router-link to="/about">Child About</router-link>
      </div>
    </div>
    <div class="container">
      <div class="header" v-if="token">Child Header</div>
      <div class="router-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["token"])
  }
};
</script>

<style>
#app, .main-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.nav {
  width: 300px;
  height: 100%;
  border-right: 2px solid red;
}
.menu {
  width: 100%;
  background: gray;
  margin-bottom: 10px;
  height: 30px;
}
.menu > a {
  color: white;
}
.container {
  flex: 1;
}
.header {
  background: #ada5a5;
  width: 100%;
  height: 50px;
  color: white;
}
</style>
