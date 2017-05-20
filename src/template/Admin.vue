<template>
    <el-row>
        <el-row>
            <el-col :span="24">
                <AppHeader></AppHeader>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <LeftMenu></LeftMenu>
            </el-col>
            <el-col :span="20">
                <div class="content">
                    <router-view></router-view>
                </div>

                <AppFooter></AppFooter>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
  import AppFooter from '../components/common/AppFooter.vue'
  import AppHeader from '../components/common/AppHeader.vue'
  import LeftMenu from '../components/common/LeftMenu.vue'
  import '../assets/css/admin.css'
  export default {
    components: {
      AppFooter, AppHeader, LeftMenu
    }
  }
</script>

