<template>
<div id="app">
  <router-view ></router-view>
  <FooterNav v-show="$route.meta.showFoot"></FooterNav>
</div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav'

export default {
  components: {
    FooterNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
