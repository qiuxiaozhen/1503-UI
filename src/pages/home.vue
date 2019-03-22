<template>
  <div class="home">
    <h1>Hello 1503!</h1>
    <div class="btn-group">
      <j-button class="btn" @click="goPage('qxzTest')">小真哥</j-button>
      <j-button class="btn" @click="goPage('lmTest')">梅梅桑</j-button>
      <j-button class="btn" @click="goPage('lsqTest')">啊溜</j-button>
      <j-button @click="goPage('hzzTest')">猪猪</j-button>
    </div>
  </div>
</template>

<script>
  import jButton from '@/components/Button/jButton';
  export default {
    name: 'home',
    data () {
      return {
      };
    },
    components: {
      jButton
    },
    methods: {
      goPage (name) {
        console.log('[home] goPage: ', name);
        this.$router.push({
          name: name
        });
      }
    }
  };
</script>
<style scoped lang="scss">
  $themeColor: red;
  * {
    margin: 0;
    padding: 0;
  }
  .home {
    h1 {
      color: $themeColor;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: right;
    }

    .btn-group {
      width: 100px;
      position: fixed;
      top: 50%;
      right: 50px;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);

      .btn {
        margin-bottom: 10px;
        display: inline-block;
      }
    }
  }
</style>
