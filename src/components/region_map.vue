<template>
  <div class="chinamap" ref="chinamap"></div>
</template>

<script>
import city from "../utils/citylist";
import { mapGetters } from "vuex";
const provinces = city.provinces;
const provincesText = city.provincesText;

export default {
  data() {
    return {
      cit: "广东省",
      name: "guangdong"
    };
  },
  mounted() {
    this.setMap();
  },
  computed: {
    ...mapGetters(["chooseVa"])
  },
  watch: {
    chooseVa(val, oldval) {
      this.cit = val[0];
      this.name = provinces[provincesText.indexOf(this.cit)];
      this.showProvite();
    }
  },
  methods: {
    setMap: function() {
      this.showProvite();
    },
    showProvite() {
      console.log("name:" + this.name);
      console.log("map:" + city[this.name]);
      let thisChart = this.$echarts.init(this.$refs.chinamap);
      let self = this;
      this.$echarts.registerMap(this.name, city[this.name]);

      //配置地图属性
      let option = {
        backgroundColor: "#154e90",
        animation: true,
        animationDuration: 1000,
        animationEasing: "cubicInOut",
        animationDurationUpdate: 1000,
        animationEasingUpdate: "cubicInOut",
        title: {
          text: this.cit,
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
            mapType: self.name,
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