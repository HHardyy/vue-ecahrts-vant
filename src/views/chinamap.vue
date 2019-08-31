<template>
  <div class="chinamap">
    <div>
      <NavBar />
    </div>
    <br />
    <ChinaMap />
  </div>
</template>

<script>
import NavBar from "../components/navBar";
import ChinaMap from "../components/china_map_tab";
export default {
  name: "chinamap",
  components: {
    NavBar,
    ChinaMap
  }
};
</script>