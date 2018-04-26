<template>
  <div class="error-page">
      <el-row>
          <el-card >
              <p slot='title'> 404-页面不存在 </p>
              <el-row>
                  <el-col :span='10'>
                      <el-card>
                          <el-row>
                              <div class="error-page-show">
                                  <error404></error404>
                              </div>
                                <div></div>
                              </el-row>
                      </el-card>

                      </el-col>
                      <el-col :span='14' class="padding-left-10">
                          <el-row>
                               <p>当访问的页面不存在时会跳转到404页面，您可以在浏览器地址栏中修改url为一个不存在的路径，体验一下效果</p>
                          </el-row>
                     </el-col>
                  </el-row>
          </el-card>
      </el-row>
       <el-row>
          <el-card >
              <p slot='title'> 403-权限不足 </p>
              <el-row>
                  <el-col :span='10'>
                      <el-card>
                          <el-row>
                              <div class="error-page-show">
                                  <error403></error403>
                              </div>
                                <div class="error-page-cover"></div>
                              </el-row>
                      </el-card>

                      </el-col>
                      <el-col :span='14' class="padding-left-10">
                          <el-row class="error-page-intro-con">
                                <p>在当前登录用户不具有执行当前操作的权限时跳转到该页面，您可以在ajax请求方法中判断返回的状态码为403时跳转到该页面</p>
                        </el-row>
                     </el-col>
                  </el-row>
          </el-card>
      </el-row>
      <el-row>
          <el-card >
              <p slot='title'> 500服务器端错误 </p>
              <el-row>
                  <el-col :span='10'>
                      <el-card>
                          <el-row>
                              <div class="error-page-show">
                                  <error500></error500>
                              </div>
                                <div></div>
                              </el-row>
                      </el-card>

                      </el-col>
                      <el-col :span='14' class="padding-left-10">
                          <el-row>
                               <p>当请求之后出现服务端错误时跳转到该页面，您可以在ajax请求方法中判断返回的状态码为500时跳转到该页面</p>
                         </el-row>
                     </el-col>
                  </el-row>
          </el-card>
      </el-row>
  </div>
</template>

<script>
import Error404 from './404.vue'
import Error403 from './403.vue'
import Error500 from './500.vue'

export default {
  components: {
    Error404,
    Error403,
    Error500
  }
}
</script>

<style lang="less">
@import url('./error-page.less');
</style>
