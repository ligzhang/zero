<template>
  <div class="main" :class="{'main-hide-text':shrink}">
    <div class="sidebar-menu-con" :style="{width:shrink?'60px':'200px',overflow:shrink?'visible':'auto'}">
      <shirinkable-menu 
        :shrink='shrink'
        @on-change = 'handleSubmenuChange'
        :theme='menuTheme'
        :menu-list='menuList'
      >
      <div slot='top' class='logo-con' >
          <img v-show='!shrink' src="" alt="" key='max-logo'>
          <img v-show='shrink' src="" alt="" key='min-logo'>
      </div>
      </shirinkable-menu>
    </div>
    <div class="main-header-con">main</div>
    <div class="single-page-con">

      <div class="single-page">
        <keep-alive :include="cachePage">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import shirinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue'
export default {
  data() {
    return {
      shrink: false,
      userName: '',
      isFullScreen: false,
      openedSubmenuArr: '',
      cachePage: '',
      menuTheme: '',
      menuList: []
    }
  },
  components: { shirinkableMenu },
  methods: {
    handleSubmenuChange() {}
  },
  mounted() {
    const token = this.$token.sign(
      {
        username: 'foobar',
        password: '123456'
      },
      'lalalalallfkdjfei jfldjfkjefjkldfiejfejfkdjk',
      { expiresIn: 60 * 60 }
    )
    const path = require('path')
    console.log(token, 'token')
  }
}
</script>

<style lang="less" >
@import url('./main.less');
</style>
