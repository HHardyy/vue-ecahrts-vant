<template>
  <div class="broken_line" ref="broken_line"></div>
</template>

<script>
export default {
  mounted() {
    this.initBroken();
  },
  methods: {
    initBroken() {
      let broBox = this.$refs.broken_line;
      let valueCharts = this.$echarts.init(broBox);
      let app = {},
        options = null,
        colors = ["#f8dd34"];

      options = {
        title: {
          textStyle: {
            color: "#f8dd34",
            fontWeight: 500,
            fontSize: 16
          },
          top: 6
        },
        color: colors,
        grid: {
          //   left: 56,
          width: "74%"
        },

        xAxis: {
          type: "category",
          name: "日期",
          boundaryGap: false,
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [9, 12]
          },
          data: ["8/1", "8/10", "8/18", "8/22", "8/26", "8/30", "10/1"]
        },
        yAxis: {
          //坐标轴
          type: "value",
          name: "人",
          min: 100,
          max: 1000,
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [9, 12]
          }
        },
        legend: {
          top: 12,
          data: ["区域统计"],
          textStyle: {
            color: "#f8dd34"
          }
        },
        series: [
          {
            type: "line",
            name: "区域统计",
            data: [468, 152, 268, 597, 364, 681, 996],
            smooth: true,
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值"
                },
                {
                  type: "min",
                  name: "最小值"
                }
              ],
              label: {
                color: "#000"
              }
            }
          }
        ]
      };
      if (options && typeof options === "object") {
        valueCharts.setOption(options, true);
      }
      window.onresize = function() {
        valueCharts.resize();
      };
    }
  }
};
</script>

<style lang='stylus'>
.broken_line {
  width: 90%;
  height: 13rem;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0rem 0rem 1rem #adadad;
}
</style>