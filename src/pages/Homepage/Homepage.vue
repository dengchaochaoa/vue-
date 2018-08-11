<template>
  <div id="homepage">
    <div class="search">
      <div class="search_1">网易严选</div>
      <input class="search_2" type="text" placeholder="搜索商品, 共9771款好物">
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #homepage{
    color: white
    width: 100px
    height: 100px
  }
  #homepage>.search{
    width: 100px
    background: pink;
  }
  #homepage .search .search_1{
    float: left
    font-size 24px
  }
  #homepage .search .search_2{
    float: right
  }






</style>
