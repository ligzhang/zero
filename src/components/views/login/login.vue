<template>
  <div class="login" >
      <div class="login-con">
          <el-card class="box-card">
                 <div slot="header" class="clearfix">
                 <span>欢迎登陆</span>
                 </div>
                <div class='form-con'>
                    <el-form ref="loginForm" :rules="rules"  :model="form" label-width="">
                        <el-form-item label="" prop="userName" class="header">
                            <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
                           
                        </el-form-item>
                    <el-form-item label="" prop="password">
                        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item >
                         <el-button @click="handleSubmit" type="primary">登陆</el-button>
                    </el-form-item>
                      <p class="login-tip">输入任意用户名和密码即可</p>
                </el-form>

                </div>
            </el-card>

      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: 'ele_admin',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert('success')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url('../../../images/login_bg.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  .login-con {
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
    text-align: center;
    .el-button {
      width: 100%;
    }
    .login-tip {
      font-size: 14px;
      color: #c3c3c3;
    }
  }
}
</style>
