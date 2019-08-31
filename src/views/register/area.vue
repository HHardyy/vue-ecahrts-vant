<template>
  <div class="area">
    <van-popup v-model="show" position="bottom" :close-on-click-overlay="false">
      <van-picker
        show-toolbar
        title="请选择区域"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
        @change="onChange"
      />
      <!--                 <van-picker :columns="columns" @change="onChange" /> -->
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { Popup } from "vant";
import { Picker } from "vant";
import city from "../../utils/citylist";
Vue.use(Picker);
Vue.use(Popup);

let provincesText = city.provincesText;
let provinces = city.provinces;
let proviceItem = [];
let itemObj = {};
let itemArr = [];

provinces.forEach((item, index) => {
  proviceItem.push(city[item]);
});
for (let i = 0; i < proviceItem.length; i++) {
  let temporary = [];
  for (let j = 0; j < proviceItem[i].features.length; j++) {
    temporary.push(proviceItem[i].features[j].properties.name);
  }
  itemArr.push(temporary);
}
provincesText.forEach((item, index) => {
  itemObj[item] = itemArr[index];
});
let citys = itemObj;

export default {
  data() {
    return {
      columns: [
        {
          values: Object.keys(citys),
          className: "column1"
        },
        {
          values: citys["深圳"],
          className: "column2",
          defaultIndex: 2
        }
      ],
      selVal: "",
      show: false
    };
  },
  computed: {
    ...mapGetters(["isShow"])
  },
  methods: {
    ...mapActions(["hideTogo", "chooseCity"]),
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
      this.selVal = values;
    },
    onCancel() {
      this.hideTogo(false);
    },
    ShouPup() {
      this.hideTogo(false);
    },
    onConfirm(item, index) {
      this.chooseCity(item);
      this.hideTogo(false);
    }
  },
  watch: {
    isShow(val, oldval) {
      this.show = val;
    }
  }
};
</script>

<style lang="stylus" scoped>
.area {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 996;
}
</style>