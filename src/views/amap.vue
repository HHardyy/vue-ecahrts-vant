<template>
  <div class="amap">
      <div>
          <NavBar/>
      </div>
      <br>
      <Amap/>
  </div>
</template>

<script>
import NavBar from "../components/navBar";
import Amap from "../components/map";
export default {
  components: {
    NavBar,
    Amap
  }
};
</script>