<template>
  <div id="app">
    <!-- 注意  把transition组件写在keepalive组件中会导致缓存失效 -->
    <transition :name="transitionName" mode="out-in">
      <keep-alive >
          <router-view v-if="$route.meta.keepAlive" class="router-view"></router-view>
      </keep-alive>
     </transition>
    <transition :name="transitionName" mode="out-in">
        <router-view v-if="$route.meta.keepAlive == undefined" class="router-view"></router-view>
      </transition>
    <foot-bar v-show="$route.meta.footShow"></foot-bar>
  </div>
</template>
<script>
import FootBar from "@/components/FootBar";
export default {
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  components: {
    FootBar
  },
  created(){
    console.log(this.$route.meta.keepAlive)
  },
  watch: {
    $route(to, from) {
      const tabPath = [
        "/home",
        "/cinema",
        "/movie",
        "/ticket",
        "/main"
      ];
      if (
        tabPath.some(item => item == to.path) &&
        tabPath.some(item => item == from.path)
      ) {
        this.transitionName = "fade";
      } else {
        // console.log('to.path',to.path)
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        this.transitionName =
          toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  }
};
</script>
<style lang="scss">
//  统一padding
$basePadding: 17.5px;
// 版心
$baseCenterWidth: 340px;
// 字体颜色
$baseFontColor: #dfdfdf;
// 字体颜色2
$baseFontColor2: #fbc34a;
// 背景色
$baseBgColor: #22262d;
// 次级背景色
$baseBgLightColor: #22262d;
// 渐变色
@mixin changeColor() {
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
}
button {
  outline: none;
  border: none;
}

body {
  background-color: $baseBgColor;
  //取消移动端点击后的默认背景色
  -webkit-tap-highlight-color: transparent;
  line-height: 1.2;
}
body,
html {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $baseFontColor;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view {
  margin-bottom: 100px;
  overflow-x: hidden;
}
.slide-left-enter-active {
  animation: slideLeft 0.4s;
}
.slide-right-enter-active {
  animation: slideRight 0.4s;
}
.fade-enter-active {
  transition: all ease 0.2s;
}
.fade-enter {
  opacity: 0;
}
@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
