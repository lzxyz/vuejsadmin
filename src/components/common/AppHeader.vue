<template>
    <div class="hearder bg-black">
        <!--布局-->
        <div></div>
        <div class="header-user">
            <el-dropdown>
              <span class="el-dropdown-link">
                  <div class="header-user-info">
                      <img class="logo" src="../../assets/image/Logo.png">
                  </div>
                  <!--<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<style>
    .header-user{
        margin-top:10px ;
        margin-right: 10px;
        float: right;
    }
    .header-user-info{
        display: block;
        height: 55px;
        vertical-align: middle;
    }
    .logo{
        border-radius: 25px;
        width: 50px;
        height: 50px;
    }
</style>

