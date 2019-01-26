<template>
  <div class="search">
  <div>
  <mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索" @keydown.enter.native="searchDate" ref="inputRef">
  </mt-search>
    </div>
  <ul>
    <li v-for="(list, index) in historylist" :key="index" @click="tosearch(list)">{{list}}
      <span class="del" @click="dellist(index)">x</span>
      </li>
    <h3 v-if="historylist.length===0">
      搜索为空
    </h3>
  </ul>
  </div>
</template>
<script>
export default{
  data () {
    return {
      value: '',
      historylist: []
    }
  },
  watch: {
  },
  mounted () {
    var historydata = JSON.parse(localStorage.getItem('history'))
    var hisrev = []
    historydata.forEach(element => {
      hisrev.push(element)
    })
    this.historylist = hisrev.reverse()
  },
  methods: {
    searchDate () {
      if (this.value.trim() !== '') {
        if (localStorage.getItem('history')) {
          var historydata = JSON.parse(localStorage.getItem('history'))
          historydata.push(this.value)
          var hisrev = []
          historydata.forEach(element => {
            hisrev.push(element)
          })
          this.historylist = hisrev.reverse()
          localStorage.setItem('history', JSON.stringify(historydata))
          this.$router.push({
            path: '/searchList',
            query: {
              key: this.value
            }
          })
        } else {
          localStorage.setItem('history', '[]')
          var historydatas = JSON.parse(localStorage.getItem('history'))
          historydatas.push(this.value)
          localStorage.setItem('history', JSON.stringify(historydatas))
        }
      } else {
        alert('请输入内容')
      }
    },
    dellist (index) {
      let deldata = JSON.parse(localStorage.getItem('history'))
      deldata.splice(deldata.length - 1 - index, 1)
      var hisrev = []
      deldata.forEach(element => {
        hisrev.push(element)
      })
      this.historylist = hisrev.reverse()
      localStorage.setItem('history', JSON.stringify(deldata))
    },
    tosearch (list) {
      this.value = list
      let inputDom = this.$refs.inputRef
      console.log(inputDom.$refs.input)
      // 3. 调用focus方法实现聚焦
      // inputDom.focus()
      inputDom.$refs.input.focus()
    }
  }
}
</script>
<style lang="scss" scoped>
  .search{
    >div{
    position: fixed;
    top: 40px;
    width: 100%;
    }
  }
  ul{
    position: absolute;
    top: 85px;
    width: 100%;
    >li{
      background-color: #fff;
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
  .del{
    float: right;
    margin-right: 10px
  }
</style>
