<template>
  <div class='error404'>
      <div class='error404-body-con'>
         <el-card class="box-card">
            <div class="error404-body-con-title">
                4<span>0</span>4
            </div>
            <p class="error404-body-con-message">YOU &nbsp;&nbsp;LOOK&nbsp;&nbsp; LOST</p>
         <div  class="error404-btn-con">
             <el-button @click='goHome' size='large' style='width:200px' type="text">返回首页</el-button>
             <el-button @click='backPage' size='large' style="width:200px;margin-left:40px;" type="primary">返回上一页</el-button>
         </div>
        </el-card>

      </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        name: 'home'
      })
    },
    backPage() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less'>
@import url('./404.less');
</style>
