<template>
  <div name='First'>
    1
  </div>
</template>

<script>
console.log(Date.now(), "form    firstl")
export default {
  name: "First",
  data() {
    return {
      msg: "hello first"
    }
  },
  methods: {
    forward() {
      console.log("go to next", this.$router)
      this.$router.push({
        name: "First"
      })
    },
    forward1() {
      this.$router.push({
        name: "Second"
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
