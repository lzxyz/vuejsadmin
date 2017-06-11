<template>
	<el-row class="login">
        <div class="login-form">
			<el-form :model="loginForm" :rules="loginRule"  ref="loginFrom" label-width="80px">
				<el-form-item label="登录账号" prop="username">
					<el-input name="username" v-model="loginForm.username" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="登录密码" prop="password">
					<el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item style="margin-bottom: 10px">
					<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
				</el-form-item>
			</el-form>
        </div>
	</el-row>
</template>

<script>
  export default {
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRule: {
          username: [
            { required: true, message: '请输入登录账号', trigger: 'blur' },
            { min: 4, max: 16, message: '账号长度在 4 到 16 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
