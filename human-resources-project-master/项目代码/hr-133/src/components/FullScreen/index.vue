<template>
  <!-- 放置一个图标 -->
  <div class="screenWrapper">
    <svg-icon
      icon-class="fullscreen"
      class="fullscreen"
      @click="toggleScreen"
    />
  </div>
</template>

<script>
export default {
  name: 'ScreenFull',
  methods: {
    toggleScreen() {

    }
  }
}
</script>

<style lang="scss" scoped>
.screenWrapper {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.fullscreen {
  width: 20px;
  height: 20px;
  color: #fff;
  cursor: pointer;
}
</style>
