<template>
  <el-row>
    <!-- 导航 -->
    <el-row>
      <el-col :span="24" class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/Index' }">系统面板</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <hr class="hr-line"/>
    </el-row>

    <!-- 搜索框 -->
    <el-row class="search-box">
      <el-col :span="24">
        <el-form :inline="true">

          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="filters.username"></el-input>
          </el-form-item>

          <el-form-item label="开始日期">
            <el-date-picker v-model="filters.begin_time" format="yyyy-MM-dd"
                            type="date" placeholder="请选择开始日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="结束日期">
            <el-date-picker v-model="filters.end_time" format="yyyy-MM-dd"
                            type="date" placeholder="请选择结束日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!-- 操作按钮 -->
    <el-row class="tool-box">
      <el-col :span="24">
        <el-button type="primary" icon="plus" size="small" @click="dialogLogForm = true">
          新增
        </el-button>
        <el-button type="warning" icon="edit" size="small" :disabled="this.id <= 0">编辑</el-button>
        <el-button type="danger" icon="delete" size="small" :disabled="this.id <= 0">删除</el-button>
        <el-button type="info" icon="view" size="small" :disabled="this.id <= 0">查看</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-row>
      <el-col :span="24">
        <el-table
          ref="multipleTable"
          :data="datalist"
          border
          highlight-current-row
          tooltip-effect="dark"
          style="width: 99%"
          :default-sort="{prop: 'id', order: 'descending'}"
          v-loading="listLoading"
          element-loading-text="拼命加载中..."
          @row-click="handleRowSelect">

          <el-table-column
            label="编号"
            prop="id"
            sortable
            width="120">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            sortable
            width="120">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="120">
          </el-table-column>
          <el-table-column
            prop="login_time"
            label="登录时间"
            sortable
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="login_ip"
            label="登录IP"
            width="120">
          </el-table-column>
          <el-table-column
            prop="reg_time"
            label="注册时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="reg_ip"
            label="注册IP"
            width="120">
          </el-table-column>
          <el-table-column
            prop="channel"
            label="来源"
            width="120">
          </el-table-column>

        </el-table>
      </el-col>
    </el-row>
    <!-- 分页 -->
    <el-row class='page-box'>
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[20, 50, 100, 200]"
          :page-size="20"
          layout="total, sizes, prev, pager, next"
          :total="this.total">
        </el-pagination>
      </el-col>
    </el-row>

    <!-- 弹出窗 -->
    <el-dialog title="收货地址" :visible.sync="dialogLogForm">
      <el-form>
        <el-form-item label="活动名称">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogLogForm = false">取 消</el-button>
        <el-button type="primary" @click="dialogLogForm = false">确 定</el-button>
      </div>
    </el-dialog>

  </el-row>

</template>

<script>
  import { UserList } from '../../api/api'
  export default {
    data () {
      return {
        id: 0,
        listLoading: false,
        // 分页参数
        page: 1,
        page_size: 20,
        total: 100,
        // 筛选条件
        filters: {
          begin_time: '',
          end_time: '',
          username: ''
        },
        // 数据源
        datalist: [],
        // 添加框
        dialogLogForm: false
      }
    },
    methods: {
      // 列表选中
      handleRowSelect (columns) {
        this.id = columns.id
        console.log(columns.id)
      },
      // 分页
      handleCurrentChange () {
        this.getDataList()
      },
      // 分页条数切换
      handleSizeChange (size) {
        this.page_size = size
      },
      // 搜索功能
      onSubmit () {
        console.log(this.filters.begin_time)
        //console.log(this.filters.begin_time.Format('yyyy-MM-dd'))
      },
      // 读取列表数据
      getDataList () {
        this.listLoading = true
        let params = {}
        UserList(params).then((result) => {
          console.log(result)
          this.datalist = result.data.datalist
          this.page = result.data.page
          this.total = result.data.total
          this.listLoading = false
        }).catch(error => { console.log(error) })
      }
    },
    // 初始化加载
    mounted () {
      this.getDataList()
    }
  }
</script>
