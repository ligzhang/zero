<template>
  <div class="to-do-list">
     <el-col :span='2' class="height-100" style="padding-left:20px;">
         <el-row type="flex" justify="center" align='middle' class="height-100">
            
             <p>
              <el-checkbox v-model="todoitem"></el-checkbox>

             </p>
         </el-row>

     </el-col>
     <el-col :span='22' class="height-100" style="padding-left:20px;">
         <el-row type='flex' justify="start" align='middle' class="height-100">
             <p class="to-do-list-item-text" @click='handleHasDid' :class='{hasDid:todoitem}'>{{content}}</p>
         </el-row>
     </el-col>
  </div>
</template>

<script>
export default {
  name: 'toDoListItem',
  data() {
    return {
      todoitem: false
    }
  },
  props: {
    content: String
  },
  methods: {
    handleHasDid() {
      this.todoitem = !this.todoitem
    }
  }
}
</script>

<style lang="less">
@import url('./styles/to-do-list-item.less');
</style>
