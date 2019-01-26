<template>
  <div class="category">
    <div class="left">
      <mt-navbar v-model="selected" class="nav" >
         <mt-tab-item :id="item.id"
        v-for="(item, index) in lists"
        :key="index">{{item.categoryName}}{{item.id}}
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="right">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="item.id" v-for="(item, index) in lists" :key="index">
          <router-link to='' v-for="(item2, index) in productlist" :key="index">
            <img :src="'http://127.0.0.1:3000'+item2.brandLogo" alt="">
            {{item2.brandName}}
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import { category, secondCategory } from '@/api/index.js'
export default {
  data () {
    return {
      selected: '',
      lists: { },
      productlist: []
    }
  },
  watch: {
    selected (val) {
      console.log(val)
      secondCategory(val)
        .then(res => {
          this.productlist = res.data.rows
        })
    }
  },
  mounted () {
    category()
      .then(res => {
        this.lists = res.data.rows
        console.log(res.data.rows[0].id)
        this.selected = res.data.rows[0].id
      })
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.category {
  display: flex;
  height: 100%;
  overflow: hidden;
  .left {
    width: 100px;
    height: 600px;
    overflow: scroll;
    .nav{
      display: flex;
      flex-direction: column
    }
  }
  .right {
    flex: 1;
    width: 100px;
    height: 600px;
    overflow: scroll;
  }
}
</style>
