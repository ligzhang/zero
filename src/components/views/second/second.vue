<template>
  <div name='second'>
      {{msg}}
      <div>222</div>
  </div>
</template>

<script>
console.log(Date.now(), "form    second")
export default {
  data() {
    return {
      msg: "hello second"
    }
  }
}
</script>

<style lang="less" scoped>
</style>
