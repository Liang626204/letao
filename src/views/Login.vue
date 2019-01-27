<template>
  <div class="login">
    <br>
    <mt-field label="用户名" placeholder="用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="密码" type="password" v-model="password"></mt-field>
    <br>
    <mt-button type="primary" size="large" @click="tologin">登录</mt-button>
    <br>
    <mt-button type="danger" size="large">取消</mt-button>
  </div>
</template>
<script>
import { login } from '@/api/index.js'
export default{
  data () {
    return {
      username: 'itcast',
      password: '111111',
      obj: {}
    }
  },
  methods: {
    tologin () {
      this.obj.username = this.username
      this.obj.password = this.password
      login(this.obj)
        .then(res => {
          console.log(res)
          if (res.request.status === 200) {
            console.log(this.$route.query.url)
            location.href = this.$route.query.url
          }
        })
    }
  }
}
</script>
<style lang="scss">

</style>
