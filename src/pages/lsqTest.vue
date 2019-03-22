<template>
  <div class="lsq-test">
    啊溜专属页面，谢谢！
  </div>
</template>

<script>
  export default {
    name: 'lsqTest'
  };
</script>
<style scoped lang="scss">
  $themeColor: pink;
  $largeFontSize: 30px;
  .lsq-test {
    color: $themeColor;
    font-size: $largeFontSize;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
</style>
