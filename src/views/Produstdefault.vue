<template>
  <div class="produstdefault">
    <mt-swipe :auto="4000" style="height:230px">
      <mt-swipe-item v-for="(item, index) in picAddr" :key="index">
      <img :src="'http://127.0.0.1:3000/'+item.picAddr" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <p>{{name}}</p>
    <br>
    <div>价格：<span>￥{{price}}</span><i>￥{{oldPrice}}</i></div>
    <br>
    <div class="size">尺码：
      <ul class="clearfix">
        <li v-for="(item, index) in sizes"
        :key="index"
        :class="{active:ischoose===item}" @click="getnum(item)">
        {{item}}</li>
      </ul>
    </div>
    <br>
    <div>
      <p>数量：</p>
      <br>
      <mt-range
        v-model="rangeValue"
        :min="0"
        :max="max"
        :step="1"
        :disabled = false
        :bar-height="5">
        <div slot="start">0</div>
        <div slot="end">{{max}}</div>
      </mt-range>
      <p>已选择{{rangeValue}}件</p>
    </div>
    <br>
    <div>
      <mt-button type="danger" @click="tocar">加入购物车</mt-button>
      <mt-button type="primary">立即购买</mt-button>
    </div>
  </div>
</template>
<script>
import { productinfo } from '@/api/index.js'
var id = ''
export default {
  data () {
    return {
      name: '',
      price: '',
      oldPrice: '',
      rangeValue: 1,
      sizes: [],
      getsize: '',
      temp: 0,
      max: 1,
      picAddr: '',
      ischoose: true,
      obj: {},
      num: ''
    }
  },
  watch: {
    rangeValue (val) {
      console.log(val)
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      id = this.$route.params.id
      productinfo(id)
        .then(res => {
          console.log(res.data)
          this.name = res.data.proName
          this.price = res.data.price
          this.oldPrice = res.data.oldPrice
          this.max = res.data.num
          this.picAddr = res.data.pic
          this.getsize = res.data.size.split('-')
          this.temp = this.getsize[0]
          for (let index = 0; index <= this.getsize[1] - this.getsize[0]; index++) {
            this.temp.toString()
            this.sizes.push(this.temp)
            this.temp++
          }
        })
    },
    /* 获取尺寸 */
    getnum (item) {
      this.ischoose = item
      this.num = item
    },
    /* 获取加入购物车的数据 */
    getAll () {
      this.obj.productid = this.$route.params.id
      this.obj.num = this.num
      this.obj.size = this.rangeValue
      console.log(this.obj)
    },
    /* 跳到购物车 */
    tocar () {
      this.getAll()
    }
  }
}
</script>
<style lang="scss" scoped>
  .produstdefault{
    height: 100%;
    overflow: scroll;
  }
  .size{
    ul{
      margin-top: 10px;
    }
    ul>li{
      float: left;
      border: 1px solid black;
      font-size: 30px;
      margin-left: 10px;
      text-align: center;
      width: 50px;
      margin-bottom: 10px;
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
  .active{
    background-color: green;
  }
</style>
