<template>
    <el-row>
        <el-row>
            <el-col :span="24" class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/Index' }">系统面板</el-breadcrumb-item>
                    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                    <el-breadcrumb-item>网站设置</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <hr class="hr-line"/>
        </el-row>
        <el-row>
            <el-col :span="24">
              <el-tabs active-name="web">
                <!-- 网站配置选项卡 -->
                <el-tab-pane label="网站配置" name="web">
                  <el-row>
                    <el-col :span="23">
                      <el-form ref="form"  label-width="80px">

                        <el-form-item label="网站名称">
                          <el-input name="web_title" placeholder="请输入网站名称"></el-input>
                        </el-form-item>

                        <el-form-item label="网站描述">
                          <el-input name="web_desc" type="textarea" placeholder="请输入网站描述" ></el-input>
                        </el-form-item>

                        <el-form-item label="网站备案">
                          <el-input name="web_foot" placeholder="请输入网站备案"></el-input>
                        </el-form-item>

                        <el-form-item label="网站状态">
                          <el-switch v-model="web_status" name='web_status' on-text="开" off-text="关" ></el-switch>
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primary">保存</el-button>
                          <el-button>取消</el-button>
                        </el-form-item>
                      </el-form>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <!-- 邮件配置选项卡 -->
                <el-tab-pane label="邮件配置" name="email">
                  <el-row>
                    <el-col :span="23">
                      <el-form ref="form"  label-width="90px">

                        <el-form-item label="服务器地址">
                          <el-input name="mail_host" placeholder="请输入邮件服务器地址"></el-input>
                        </el-form-item>
                        <el-form-item label="服务器端口">
                          <el-input name="mail_port" placeholder="请输入服务器端口"></el-input>
                        </el-form-item>

                        <el-form-item label="邮件帐号">
                          <el-input name="mail_user" placeholder="请输入邮件帐号"></el-input>
                        </el-form-item>

                        <el-form-item label="邮件密码">
                          <el-input name="mail_password" type="password" placeholder="请输入邮件密码"></el-input>
                        </el-form-item>

                        <el-form-item label="邮件状态">
                          <el-switch v-model="mail_status" name='web_status' on-text="开" off-text="关" ></el-switch>
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primary">保存</el-button>
                          <el-button>取消</el-button>
                        </el-form-item>
                      </el-form>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <!-- 短信配置选项卡 -->
                <el-tab-pane label="短信配置" name="sms">
                  
                </el-tab-pane>
              
              </el-tabs>
            </el-col>
        </el-row>
    </el-row>

</template>
<script>
  export default {
    data () {
      return {
        web_status: 1
      }
    }
  }
</script>
