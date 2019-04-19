<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left">
        <span class="icon-back" @click="back"></span>
      </div>
      <div class="middle">
        <span>{{getSectionName}}</span>
      </div>
      <div class="right">
        <div class="icon-wrapper" @click="jumpToShelf">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper" v-if="cart">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper" @click="nextComing">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";

export default {
  mixins: [ebookMixin],
  data() {
    return {
      cart: false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    jumpToShelf() {
      this.$router.push("/store/shelf");
    },
    nextComing() {
      console.log("+");
      const text = "敬请期待";
      this.simpleToast(text);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/styles/global";
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 210;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(20);
  .left {
    flex: 0 0 px2rem(50);
    @include center;
  }
  .middle {
    flex: 2;
    line-height: px2rem(48);
    font-size: px2rem(14);
    color: #6d7178;
    @include ellipsis;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(40);
      @include center;
      .icon-shelf {
        font-size: px2rem(22);
      }
      .icon-cart {
        font-size: px2rem(22);
      }
    }
  }
}
</style>
