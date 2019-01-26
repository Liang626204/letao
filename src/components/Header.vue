<template>
  <mt-header title="乐淘" fixed>
  <router-link to="" slot="left">
    <mt-button icon="back" @click="goback">返回</mt-button>
  </router-link>
  <mt-button slot="right"><router-link to="/search">搜索</router-link></mt-button>
  </mt-header>
</template>
<script>
export default {
  methods: {
    goback () {
      history.back()
    }
  }
}
</script>
