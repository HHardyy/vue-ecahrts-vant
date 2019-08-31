<template>
  <div class="brokenline">
    <div>
      <NavBar />
    </div>
    <br />
    <Brokenline />
    <br />
    <Brokenline />
    <br />
    <Brokenline />
  </div>
</template>

<script>
import NavBar from "../components/navBar";
import Brokenline from "../components/broken_line";
export default {
  components: {
    NavBar,
    Brokenline
  }
};
</script>