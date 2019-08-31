<template>
  <div class="navbar">
    <span @click="mapToOrigonMap">选择地图</span>
    <span @click="mapToBrokenline">折线图</span>
    <span @click="mapTomap">省地图</span>
    <span @click="mapTobannerMap">左右切换地图</span>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    mapToOrigonMap() {
      this.$router.push("/");
    },
    mapToBrokenline() {
      this.$router.push("/brokenline");
    },
    mapTomap() {
      this.$router.push("/amap");
    },
    mapTobannerMap() {
      this.$router.push("/chinamapbanner");
    }
  }
};
</script>

<style lang="stylus" scope>
.navbar {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  display: flex;
  flex-derection: row;

  span {
    flex: 1;
    font-size: 0.9rem;
    display: inline-block;
    background: #f9de39;
    text-align: center;
    color: #fff;
    border-radius: 0.4rem;
    box-shadow: 0rem 0.1rem 0.1rem #c2cdb5;
  }
}
</style>