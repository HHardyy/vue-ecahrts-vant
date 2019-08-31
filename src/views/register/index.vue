<template>
  <div class="register">
    <NavBar />
    <div class="titleBox">
      <div class="titleBox">
        <h2>合作伙伴智能管理平台</h2>
      </div>
      <Form />
    </div>

    <Area />
    <div class="mapBox">
      <MapTab />
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/navBar.vue";
import Form from "./form.vue";
import MapTab from "../../components/region_map.vue";
import Area from "./area.vue";
export default {
  components: {
    NavBar,
    Form,
    MapTab,
    Area
  }
};
</script>

<style lang="stylus" scope>
.register {
  width: 100vw;
  height: 100vh;
  background: #faf2ed;
  overflow: hidden;

  .titleBox {
    margin-top: 1rem;

    .titleBox {
      text-align: center;

      h1 {
        font-size: 1.3rem;
        font-weight: 550;
        color: #935f3d;
      }

      h2 {
        font-size: 0.8rem;
        color: #c7b1a8;
        line-height: 2rem;
      }
    }
  }
}
</style>