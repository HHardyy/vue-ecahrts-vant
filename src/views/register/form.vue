<template>
  <div class="formBox">
    <div class="pagetitle">分布情况</div>

    <div class="formItem" @click="fadeinFunc">
      <div class="icon">
        <i class="iconfont icon-weizhi"></i>
      </div>
      <div class="input">
        <span class="selectArea">{{chooseV}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      showPic: false,
      chooseV: "请选择区域"
    };
  },
  methods: {
    ...mapActions(["fadeIntogo"]),
    fadeinFunc() {
      this.showPic = true;
      this.fadeIntogo(this.showPic);
    }
  },
  computed: {
    ...mapGetters(["chooseVa"])
  },
  watch: {
    chooseVa(val, oldval) {
      this.chooseV = `${val[0]}${val[1] ? " - " + val[1] : ""}`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.formBox {
  width: 90%;
  background: #fff;
  margin: 0 auto;
  padding: 0 2rem 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  .pagetitle {
    display: block;
    text-align: center;
    line-height: 3rem;
    font-weight: 600;
    font-size: 1.3rem;
  }

  .formItem {
    width: 100%;
    height: 2.4rem;
    background: #f5f5f5;
    padding-left: 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between center;
    align-items: center;
    margin-bottom: 0.6rem;

    .icon {
      color: #f9dd38;
      margin-right: 0.4rem;

      .iconfont {
        font-size: 1.3rem;
      }
    }

    .input {
      width: 100%;

      .selectArea {
        color: #757575;
      }

      input[type='text'], input[type='password'] {
        width: 96%;
        line-height: 1.6rem;
        border: none;
        outline: none;
        background: #f5f5f5;
        color: #000;
      }
    }
  }
}
</style>