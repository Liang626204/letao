<template>
  <div class="searchList">
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
      :autoFill='false'
      bottomPullText='上拉加载更多数据'
      class="loadlist"
    >
        <div class="goodinfo clearfix">
          <router-link :to="'/produstdefault'+item.id" v-for="(item, index) in goodlist" :key="index" class="info ">
          <img :src="'http://127.0.0.1:3000'+item.pic[0].picAddr" alt="">
          <p class="lt_prodesc">{{item.proName}}</p>
          <mt-button type="primary">购买</mt-button>
          </router-link>
        </div>
    </mt-loadmore>
  </div>
</template>
<script>
import { searchData } from '@/api/index'
export default {
  data () {
    return {
      searchData: {
        proName: '',
        page: 1,
        pageSize: 2
      },
      goodlist: [],
      userKey: '',
      allLoaded: false
    }
  },
  mounted () {
    this.searchData.proName = this.$route.query.key
    console.log(this.searchData)
    searchData(this.searchData)
      .then(res => {
        console.log(res.data.data)
        this.goodlist = res.data.data
      })
  },
  methods: {
    loadBottom () {
      console.log(1)
      setTimeout(() => {
        this.$refs.loadmore.onBottomLoaded()
        this.searchData.pageSize = this.searchData.pageSize + 2
        searchData(this.searchData)
          .then(res => {
            console.log(res.data.data)
            this.goodlist = res.data.data
          })
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
.loadlist{
  height: 100%;
}
.goodinfo{
  margin-bottom: 10px;
  height: 100%;
  .info{
  float: left;
  width: 50%;
  img{
    width: 100%;
  }
  }
}
.lt_prodesc {
      color: #666;
      font-size: 13px;
      padding: 0px 5px;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
</style>
