<style scoped>
h2 {
  text-align: center;
  padding: 30px;
  font-size: 18px;
}
#chart_example {
  width: 300px;
  /* border: 1px solid red; */
  margin: 0 auto;
}
.echarts {
  width: 300px;
  height: 300px;
}
</style>
<template>
  <div class="row chart_example">
    <v-chart theme="macarons" :options="options" />
  </div>
</template>
 
<script>
import echarts from 'echarts'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/theme/macarons'
export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      id: 'mk_' + Guid.NewGuid().ToString('N'),
      options: {}
    }
  },
  props: {
    data: Array
  },
  mounted() {
    let this_ = this
    // let myChart = echarts.init(document.getElementById(this.id), 'macarons')
    let indicator = []
    let value = []

    this.data.forEach(element => {
      indicator.push({ text: element.name, max: element.maxScore > element.score ? element.maxScore : element.score })
      value.push(element.score)
    })
    this.options = {
      title: {
        // text: '雷达图'
      },
      legend: {
        data: ['图一', '图二', '显示', '李四']
      },
      radar: [
        {
          indicator: indicator,
          // center: ['50%', '50%'],
          radius: 40,
          name: {
            // formatter: '【{value}】'
            // // textStyle: {
            // //   color: '#72ACD1'
            // // }
          },
          splitArea: {
            // areaStyle: {
            //   color: [
            //     'rgba(114, 172, 209, 0.2)',
            //     'rgba(114, 172, 209, 0.4)',
            //     'rgba(114, 172, 209, 0.6)',
            //     'rgba(114, 172, 209, 0.8)',
            //     'rgba(114, 172, 209, 1)'
            //   ],
            //   shadowColor: 'rgba(0, 0, 0, 0.3)',
            //   shadowBlur: 10
            // }
          }
          // axisLine: {
          //   lineStyle: {
          //     color: 'rgba(255, 255, 255, 0.5)'
          //   }
          // },
          // splitLine: {
          //   lineStyle: {
          //     color: 'rgba(255, 255, 255, 0.5)'
          //   }
          // }
        }
      ],
      series: [
        {
          name: '成绩单',
          type: 'radar',
          radarIndex: 0,
          data: [
            {
              value: value,
              name: '显示 ',
              label: {
                normal: {
                  show: true,
                  formatter: function(params) {
                    return params.value
                  }
                  // color: '#ae2939'
                }
              },
              lineStyle: {
                // 单项线条样式。
                // normal: {
                //   opacity: 1, // 图形透明度
                //   color: '#ff8768'
                // }
              },
              areaStyle: {
                // normal: {
                //   opacity: 0.5,
                //   color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                //     {
                //       color: '#B8D3E4',
                //       offset: 0
                //     },
                //     {
                //       color: '#72ACD1',
                //       offset: 1
                //     }
                //   ])
                // }
              }
            }
          ]
        }
      ]
    }
    // myChart.setOption(option)

    // //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
    // window.addEventListener('resize', function() {
    //   myChart.resize()
    // })
  },
  methods: {},
  watch: {},
  created() {}
}
</script>
 