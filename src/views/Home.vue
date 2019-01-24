<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item ><img src="../assets/images/banner1.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/banner2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/banner3.png" alt=""></mt-swipe-item>
    </mt-swipe>
    <!-- 导航栏 -->
    <ul class="nav">
      <li><router-link to=""><img src="../assets/images/nav1.png" alt=""></router-link></li>
      <li><router-link to=""><img src="../assets/images/nav2.png" alt=""></router-link></li>
      <li><router-link to=""><img src="../assets/images/nav3.png" alt=""></router-link></li>
      <li><router-link to=""><img src="../assets/images/nav4.png" alt=""></router-link></li>
      <li><router-link to=""><img src="../assets/images/nav5.png" alt=""></router-link></li>
      <li><router-link to=""><img src="../assets/images/nav2.png" alt=""></router-link></li>
    </ul>
    <!-- 商品 -->
    <ul class="produst">
      <li><img src="../assets/images/product.jpg" alt=""><p>鞋子</p><div><span>$200</span><i>$300</i><mt-button type="primary">购买</mt-button>
</div></li>
      <li><img src="../assets/images/product.jpg" alt=""><p>鞋子</p><div><span>$200</span><i>$300</i><mt-button type="primary">购买</mt-button>
</div></li>
      <li><img src="../assets/images/product.jpg" alt=""><p>鞋子</p><div><span>$200</span><i>$300</i><mt-button type="primary">购买</mt-button>
</div></li>
      <li><img src="../assets/images/product.jpg" alt=""><p>鞋子</p><div><span>$200</span><i>$300</i><mt-button type="primary">购买</mt-button>
</div></li>
      <li><img src="../assets/images/product.jpg" alt=""><p>鞋子</p><div><span>$200</span><i>$300</i><mt-button type="primary">购买</mt-button>
</div></li>
      <li><img src="../assets/images/product.jpg" alt=""><p>鞋子</p><div><span>$200</span><i>$300</i><mt-button type="primary">购买</mt-button>
</div></li>
    </ul>
  </div>
</template>
<script>
export default{

}
</script>
<style lang="scss" scoped>
  .mint-swipe{
    display: block;
    height: 200px;
  }
  img{
    width: 100%;
  }
  .nav{
    margin-top: 10px;
  }
  .nav li {
    width: 33.33%;
    float: left;
  }
  .produst li {
    padding: 0 10px;
    width: 49%;
    float: left;
    margin-bottom: 10px;
   background-color: #fff;
  }
  .produst li :nth-last-of-type(2n){

    margin-left: 10px;
  }
</style>
