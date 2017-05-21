<template>
    <div class="nav-menu">
        <el-menu default-active="2" class="el-menu-vertical-demo nav-menu-content" unique-opened="true" @open="handleOpen" @close="handleClose" theme="dark">
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-message"></i>文档管理
                </template>
                <el-menu-item index="2-1">文档列表</el-menu-item>
                <el-menu-item index="2-2">文档分类</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-message"></i>用户管理
                </template>
                <el-menu-item index="3-1">用户列表</el-menu-item>
            </el-submenu>
            <el-submenu index="100">
                <template slot="title">
                    <i class="el-icon-message"></i>系统管理
                </template>
                <el-menu-item index="100-1">网站设置</el-menu-item>
                <el-menu-item index="100-1">权限设置</el-menu-item>
                <el-menu-item index="100-1">角色设置</el-menu-item>
                <el-menu-item index="100-1">用户设置</el-menu-item>
                <el-menu-item index="100-2">系统日志</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
