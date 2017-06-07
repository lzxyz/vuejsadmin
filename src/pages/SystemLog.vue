<template>
    <el-row>
        <!-- 导航 -->
        <el-row>
            <el-col :span="24" class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/Index' }">系统面板</el-breadcrumb-item>
                    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                    <el-breadcrumb-item>系统日志</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <hr class="hr-line"/>
        </el-row>
    
        <!-- 搜索框 -->
        <el-row class="search-box">
          <el-col :span="24">
            <el-form :inline="true" >
            <el-form-item label="审批人">
              <el-input  placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select  placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item><el-form-item>
              <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          </el-col>
        </el-row>
        
        <!-- 操作按钮 -->
        <el-row class="tool-box">
            <el-col :span="24">
                <el-button type="primary" icon="plus" @click="dialogLogForm = true">新增</el-button>
                <el-button type="warning" icon="edit">编辑</el-button>
                <el-button type="danger" icon="delete">删除</el-button>
                <el-button type="info" icon="view">查看</el-button>
            </el-col>
        </el-row>

         <!-- 表格 -->
        <el-row>
            <el-col :span="24">
              <el-table
                      ref="multipleTable"
                      :data="tableData3"
                      border
                      tooltip-effect="dark"
                      style="width: 99%"
                      :default-sort = "{prop: 'date', order: 'descending'}"
                      @selection-change="handleSelectionChange">
                  <el-table-column
                          type="selection"
                          width="55">
                  </el-table-column>
                  <el-table-column
                          label="日期"
                          prop="date"
                          sortable
                          width="120">
                      <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                          prop="name"
                          label="姓名"
                          sortable
                          width="120">
                  </el-table-column>
                  <el-table-column
                          prop="address"
                          label="地址"
                          sortable
                          show-overflow-tooltip>
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
              :current-page.sync="currentPage1"
              :page-sizes="[20, 50, 100, 200]"
              :page-size="20"
              layout="total, sizes, prev, pager, next"
              :total="100">
            </el-pagination>
          </el-col>
        </el-row>

        <!-- 弹出窗 -->
        <el-dialog title="收货地址" :visible.sync="dialogLogForm">
          <el-form >
            <el-form-item label="活动名称" >
              <el-input  auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" >
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
  import { login } from '../api/api'
  export default {
    data () {
      return {
        tableData3: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }],
        dialogLogForm: false
      }
    },
    methods: {
      formatter (row, column) {
        return row.address
      },
      handleCurrentChange () {
        var loginParams = { username: '123', password: '12313' }
        login(loginParams)
      }
    }
  }
</script>
