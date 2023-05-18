<template>
  <div>
    登录页
    <div>用户名：<input v-model="username" /></div>
    <div>密码：<input v-model="password" /></div>
    <div><button @click="login">登录</button></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data( ){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    ...mapMutations(["setToken"]),
    login() {
      if (this.username && this.password) {
        this.setToken("123456");
        this.$router.push({
          path: "/"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
