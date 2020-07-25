<template>
  <div class="base-layer-main">
    <div class="header">
      <slot name="header"></slot>
    </div>
    
    <div class="scroller-wrapper" ref="scroller-wrapperr">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { setTimeout } from "timers";
export default {
  name: "BaseLayer",

  data() {
    return {
      
    };
  },
  mounted() {
    // var wrapper = document.querySelector('.base-layer-main .scroller-wrapper');
    // wrapper.style.height = document.documentElement.clientHeight-80+'px';
    this.$nextTick(() => {
      if (!this.$scroll) {
        this.$scroll = new BScroll(this.$refs['scroller-wrapperr'], { 
            click: true
        });
      }
    });
  },
  methods: {
    refresh(){
      this.$scroll.refresh()
    }
  }
};
</script>

<style lang='scss' scoped>
.base-layer-main {
  height: 100%;
  overflow: hidden;
  .scroller-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 100%;
    .content{
        padding-top: 44px;
        width: 100%;
        position: absolute;
        left: 0 ;
        top: 0;
    }
  }
}
</style>
