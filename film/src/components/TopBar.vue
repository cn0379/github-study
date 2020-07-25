<template>
  <div class="top-bar-main">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TopBar',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
    .top-bar-main{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1999;
    }
</style>
