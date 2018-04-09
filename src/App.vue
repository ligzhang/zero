<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
  data() {
    return {
      msg: ""
    }
  },
  methods: {
    async init() {
      let res = await api.fib({ n: 7 })
      this.msg = res
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="less" scoped>
div {
  background: lightcyan;
  display: flex;
  justify-content: center;
}
</style>
