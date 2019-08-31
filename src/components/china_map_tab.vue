<template>
  <div class="chinamap" ref="chinamap"></div>
</template>

<script>
import city from "../utils/citylist";
const provinces = city.provinces;
const provincesText = city.provincesText;
export default {
  mounted() {
    this.setMap();
  },
  methods: {
    setMap: function() {
      let currentIdx = 0;
      this.showProvite(currentIdx);
    },
    showProvite(currentIdx) {
      var name = provinces[currentIdx];
      let thisChart = this.$echarts.init(this.$refs.chinamap);
      let self = this;
      let citiData = city[name];
      this.$echarts.registerMap(name, citiData);

      //配置地图属性
      let option = {
        backgroundColor: "#154e90",
        animation: true,
        animationDuration: 1000,
        animationEasing: "cubicInOut",
        animationDurationUpdate: 1000,
        animationEasingUpdate: "cubicInOut",
        title: {
          text: provincesText[currentIdx],
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            type: "map",
            roam: true,
            zoom: 1,
            selectedMode: "multiple",
            label: {
              show: true,
              fontSize: 12,
              fontWeight: "600",
              align: "center",
              color: "#21a3f1",
              emphasis: {
                textStyle: {
                  color: "#f16e20"
                }
              }
            },
            mapType: name,
            itemStyle: {
              normal: {
                borderColor: "#93ebf8",
                border: 4,
                areaColor: "#fff"
              },
              emphasis: {
                areaColor: "#389BB7",
                borderWidth: 0
              },
              layoutSize: 20
            },
            data: [
              { name: "承德市", selected: true },
              { name: "潮州市", selected: true },
              { name: "深圳市", selected: true },
              { name: "珠海市", selected: true },
              { name: "佛山市", selected: true },
              { name: "长治市", selected: true }
            ],
            animation: true
          }
        ],
        graphic: [
          {
            id: "left-btn",
            type: "circle",
            shape: { r: 20 },
            style: {
              text: "<",
              fill: "#eee"
            },
            left: 10,
            top: "middle",
            onclick: function() {
              currentIdx -= 1;
              if (currentIdx < 0) {
                currentIdx += provinces.length;
              }
              self.showProvite(currentIdx);
            }
          },
          {
            id: "right-btn",
            type: "circle",
            shape: { r: 20 },
            style: {
              text: ">",
              fill: "#eee"
            },
            top: "middle",
            right: 10,
            onclick: function() {
              currentIdx = (currentIdx + 1) % provinces.length;
              self.showProvite(currentIdx);
            }
          }
        ]
      };
      thisChart.setOption(option);
      thisChart.on("click", function() {
        let oldOption = option;
        thisChart.setOption(oldOption);
      });
    }
  }
};
</script>

<style lang="stylus">
.chinamap {
  width: 100%;
  height: 20rem;
}
</style>