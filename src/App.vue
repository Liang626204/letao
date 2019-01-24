<template>
  <div id="app">
    <le-header/>
    <le-contents/>
    <le-footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Contents from '@/components/Contents'
import Footer from '@/components/Footer'
export default {
  components: {
    'le-header': Header,
    'le-contents': Contents,
    'le-footer': Footer
  },
  name: 'App'
}
</script>

<style>
</style>
