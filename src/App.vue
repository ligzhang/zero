<template>
    <div id="main" class="app-main">
      <router-view></router-view>
    </div>
</template>

<script>
import api from '@/api/index.js'
import moment from 'moment'
import Main from '@/components/views/main.vue'
export default {
  data() {
    return {
      msg: '',
      n: 7,
      data: [],
      currentUrl: '',
      width: ''
    }
  },
  methods: {
    async init() {
      let res = await api.fib({ n: this.n })
      this.msg = res
    },
    async usr() {
      let res = await api.usr()
      this.data = res.data
      console.log(this.data, 'from usr')
    },
    go() {
      this.$router.push({ name: 'Login' })
      console.log('first')
    },
    he() {
      this.$router.push('second')
      console.log('second')
    },
    getWidth() {
      // console.log(document.querySelector('.rightHead'), 'width')
      // console.log(this.$refs.eded, 'this.$refs.getWidth')
      // offsetWidth = width + border*2 + padding*2
      // clientWidth = width + padding*2
      // this.width = this.$refs.eded.offsetTop
      // return this.$refs.getWidth.offsetWidth
    }
  },
  mounted() {
    // this.init()
    // this.usr()
  },
  computed: {},
  components: { Main }
}
</script>

<style lang="less" >
html,
body {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: hidden;

  .app-main {
    width: 100%;
    height: 100%;
  }
}
</style>
