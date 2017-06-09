<template>
    <el-row>
        <!-- 导航 -->
        <el-row>
            <el-col :span="24" class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/Index' }">系统面板</el-breadcrumb-item>
                    <el-breadcrumb-item>系统主页</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <hr class="hr-line"/>
        </el-row>

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
    </el-row>

</template>

<script>
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter (row, column) {
        return row.address
      }
    }
  }
</script>
