<template>
  <div class="map" ref="mapBox"></div>
</template>

<script>
import guangdongJson from "../mock/guangdong.json";
export default {
  mounted() {
    this.setMap();
  },
  methods: {
    setMap: function() {
      let self = this;
      this.$echarts.registerMap("guangdong", guangdongJson);
      let thisChart = this.$echarts.init(this.$refs.mapBox);
      let option = {
        backgroundColor: "#154e90",
        animation: true,
        animationDuration: 1000,
        animationEasing: "cubicInOut",
        animationDurationUpdate: 1000,
        animationEasingUpdate: "cubicInOut",
        title: {
          //   text: "广东代理分布",
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
            mapType: "guangdong",
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
              { name: "韶关市", selected: true },
              { name: "潮州市", selected: true },
              { name: "深圳市", selected: true },
              { name: "珠海市", selected: true },
              { name: "佛山市", selected: true },
              { name: "茂名市", selected: true }
            ],
            animation: true
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
.map {
  width: 100%;
  height: 20rem;
}
</style>