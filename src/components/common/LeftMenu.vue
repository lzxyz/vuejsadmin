<template>
    <div class="nav-menu">
        <el-menu default-active="/" class="el-menu-vertical-demo nav-menu-content" unique-opened="true" @open="handleOpen" @close="handleClose" theme="dark" router="true">
            <el-menu-item index="/"><i class="el-icon-message"></i>系统面板</el-menu-item>
            
            <el-submenu index='document'>
                <template slot="title">
                    <i class="el-icon-document"></i>文档管理
                </template>
                <el-menu-item index="2-1">文档列表</el-menu-item>
                <el-menu-item index="2-2">文档分类</el-menu-item>
            </el-submenu>

            <el-submenu index="user">
                <template slot="title">
                    <i class="el-icon-message"></i>用户管理
                </template>
                <el-menu-item index="/User/index">用户列表</el-menu-item>
            </el-submenu>

            <el-submenu index="system">
                <template slot="title">
                    <i class="el-icon-setting"></i>系统管理
                </template>
                <el-menu-item index="/WebSite">网站设置</el-menu-item>
                <el-menu-item index="/authseting">权限设置</el-menu-item>
                <el-menu-item index="/roleseting">角色设置</el-menu-item>
                <el-menu-item index="/seting">用户设置</el-menu-item>
                <el-menu-item index="/SystemLog">系统日志</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
