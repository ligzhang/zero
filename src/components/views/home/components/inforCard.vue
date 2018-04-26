<template>
 
      <el-card  >
          <div class="infor-card-con">
          <el-col :span='8' class="infor-card-icon-con" :style="{backgroundColor:color,color:'white'}" >
              <el-row class="height-100" type="flex" align='middle' justify="center" >
                 <!-- <img src="" alt=""/> -->
              <font-awesome-icon :icon='icon' style="font-size:40px;"/>
                 
              </el-row>
          </el-col>
          <el-col :span='16' class="height-100" >
              <el-row type='flex' align='middle' justify="center" class="height-100">
                  <count-up
                    class="infor-card-count user-careated-count"
                    :id-name='idName'
                    :end-val='endVal'
                    :color='color'
                    :countSize='countSize'
                    :countWeight='countWeight'
                  >
                    <p class="infor-intro-text" slot='intro'>{{introText}}</p>
                  </count-up>
              </el-row>
          </el-col>
          </div>
      </el-card>
 
</template>

<script>
import countUp from './countUp.vue'
export default {
  name: 'inforCard',
  components: { countUp },
  props: {
    idName: String,
    endVal: Number,
    color: String,
    introText: String,
    countSize: {
      type: String,
      default: '30px'
    },
    countWeight: {
      type: Number,
      default: 700
    },
    icon: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" >
@import url('./styles/infor-card.less');
.el-card__body {
  padding: 0;
}
</style>
