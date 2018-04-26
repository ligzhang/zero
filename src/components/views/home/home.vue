<template>
  <div class="home">
      <el-row :gutter='10'>
          <el-col :md='24' :lg='8'>
              <el-row class="home-page-row1" :gutter='10'>
                   <el-col :md='12' :lg='24' :style="{marginBottom:'10px'}">
                      <el-card >
                           <el-row type='flex' class="user-infor">
                               <el-col :span='8'>
                                   <el-row class="made-child-con-middle" type='felx' align='middle'>
                                       <img src="" alt="" class="avator-img"/>
                                    </el-row>
                               </el-col>
                               
                                   <el-col :span='16' style="padding-left:6px;">
                                       <el-row class="made-child-con-middle" type='flex' align='middle'>
                                           <div>
                                               <b class="card-user-infor-name">Admin</b>
                                               <p>super admin</p>
                                           </div>
                                       </el-row>
                                   
                                    </el-col>
                               
                               </el-row>
                               <div class="line-gray"></div>
                               <el-row class="margin-top-8">
                                   <el-col :span='8' >
                                       <p class="nowrap">上次登陆时间：</p>
                                       
                                   </el-col>
                                   <el-col :span='16' >
                                       <p class="margin-left-8"> 2018.03.19</p>
                                      
                                   </el-col>
                               </el-row>
                               <el-row class="margin-top-8">
                                   <el-col :span='8'>
                                       <p class="nowrap"> 上次登陆地点：</p>
                                      
                                   </el-col>
                                   <el-col :span="16">
                                       <p class="margin-left-8"> 北京</p>
                                      
                                   </el-col>
                               </el-row>
                        </el-card>

                  </el-col>
                  <el-col :md='12' :lg='24' :style='{marginBottom:"10px"}'>
                      <el-card>
                          <p slot='header' class="card-header">
                              <img src="" alt="">
                              待办事项
                          <a href="" type='text' style="float: right;text-decoration:none;"  @click.prevent='addNewToDoItem'>新增</a>
                              
                          </p>
                          <el-dialog  :visible.sync='showAddNewTodo'
                                   width="30%"
                                   :before-close="handleClose"
                                   title='添加新的待办事项'>
                            <el-form :model="form">
                                <el-form-item label="活动名称" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                            
                            </el-form>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="cancelAdd">取 消</el-button>
                                <el-button type="primary" @click="addNew">确 定</el-button>
                            </span>
                         </el-dialog>

                        <div class="to-do-list-con">
                            <div v-for='(item,index) in toDoList' :key='"todo-item" + (toDoList.length-index)' class="to-do-item">
                                <to-do-list-item :content='item.title' />
                            </div>
                        </div>

                      </el-card>
                  </el-col>
              </el-row>
          </el-col>
          <el-col :md='24' :lg='16'>
              <el-row :gutter='5'
              >
              <el-col :xs='24' :sm='6' :style='{marginBottom:"10px"}'>
                  <infor-card
                    id-name='user_created_count'
                    :end-val='count.createUser'
                    :icon='icon.createUser'
                    color='#2d8cf0'
                    intro-text='今日新增用户'
                  >
                </infor-card>
              </el-col>
               <el-col :xs='24' :sm='6' :style='{marginBottom:"10px"}'>
                  <infor-card
                    id-name='user_visite_count'
                    :end-val='count.visite'
                    :icon='icon.visite'
                    color='#64d572'
                    intro-text='今日访问用户'
                  >
                </infor-card>
              </el-col>
                <el-col :xs='24' :sm='6' :style='{marginBottom:"10px"}'>
                  <infor-card
                    id-name='user_collection_count'
                    :end-val='count.collection'
                    :icon='icon.collection'
                    color='#ffd572'
                    intro-text='今日统计用户'
                  >
                </infor-card>
              </el-col>
                <el-col :xs='24' :sm='6' :style='{marginBottom:"10px"}'>
                  <infor-card
                    id-name='user_transfer_count'
                    :end-val='count.transfer'
                    :icon='icon.transfer'
                    color='#f25e43'
                    intro-text='今日转化用户'
                  >
                </infor-card>
              </el-col>
              
              </el-row>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import inforCard from './components/inforCard.vue'
import toDoListItem from './components/toDoListItem.vue'
export default {
  components: { inforCard, toDoListItem },
  data() {
    return {
      count: {
        createUser: 496,
        visite: 3264,
        collection: 24389305,
        transfer: 39503098
      },
      icon: {
        createUser: ['fas', 'user'],
        visite: ['fas', 'user-plus'],
        collection: ['fas', 'user-secret'],
        transfer: ['fas', 'users']
      },
      toDoList: [
        { title: 'vue组件开发学习啦啦啦' },
        { title: 'vue组件开发学习啦啦啦' },
        { title: 'vue组件开发学习啦啦啦' },
        { title: 'vue组件开发学习啦啦啦' },
        { title: 'vue组件开发学习啦啦啦' }
      ],
      showAddNewTodo: false,
      form: {
        name: ''
      },
      formLabelWidth: ''
    }
  },
  methods: {
    addNewToDoItem() {
      this.showAddNewTodo = true
      console.log(this.showAddNewTodo, 'show')
    },
    addNew() {
      console.log(this.form.name, 'name')
      this.toDoList.push({ title: this.form.name })
      this.form.name = ''
      this.showAddNewTodo = false
    },
    cancelAdd() {
      this.showAddNewTodo = false
    },
    handleClose() {
      this.showAddNewTodo = false
      console.log(11111111)
    }
  }
}
</script>

<style lang="less">
@import url('./home.less');
</style>
