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
      <el-col :span="11">
        <el-card class="box-card">
          <div id="chart-account" style="width: 100%;height: 300px"></div>
        </el-card>
      </el-col>
      <el-col :span="11" offset="1">
        <el-card class="box-card">
          <div id="chart-visit" style="width: 100%;height: 300px"></div>
        </el-card>
      </el-col>
    </el-row>
  </el-row>

</template>

<script>
    var echarts = require('echarts/lib/echarts')
    // 引入柱状图
    require('echarts/lib/chart/bar')
    require('echarts/lib/chart/pie')
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    // 绘制图表

    export default {
      data () {

      },
      mounted () {
        // 成交图
        var chartAccount = echarts.init(document.getElementById('chart-account'))
        chartAccount.setOption({
          title: {
            text: '成交金额',
            left: 'center'
          },
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '成交金额',
              type: 'bar',
              barWidth: '60%',
              data: [100000, 52, 200, 334, 3000090, 330, 220]
            }
          ]
        })
        // 饼状 来源图
        var chartVisit = echarts.init(document.getElementById('chart-visit'))

        chartVisit.setOption(
          {
            title: {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: [ '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎' ]
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  {value: 335, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 234, name: '联盟广告'},
                  {value: 135, name: '视频广告'},
                  {value: 1548, name: '搜索引擎'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
        )
      }
    }
</script>

