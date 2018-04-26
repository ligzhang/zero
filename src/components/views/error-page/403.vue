<template>
  <div class="error403">
      <div class="error403-body-con">
        <el-card class="box-card">
            <div class="error403-body-con-title">
                4<span class="error403-0-span" ><i>0</i></span><span class="error403-key-span"><i>3</i></span>
                
            </div>
            <p class="error403-body-con-message">You dont't have permission</p>
             <div  class="error403-btn-con">
                <el-button @click='goHome' size='large' style='width:200px' type="text">返回首页</el-button>
                 <el-button @click='backPage' size='large' style="width:200px;margin-left:40px;" type="primary">返回上一页</el-button>
            </div>
        </el-card>

      </div>
  </div>
</template>


<script>
export default {
  name: 'Error403',
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
@import url('./403.less');
</style>
