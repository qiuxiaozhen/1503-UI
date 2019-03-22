<template>
  <button @click="clickEvent">
     <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'jButton',
    data () {
      return {
      };
    },
    methods: {
      clickEvent () {
        this.$emit('click');
      }
    }
  };
</script>
<style scoped lang="scss">
  button {
    padding: 10px 20px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: pink;
    color: #fff;
  }
  button:hover {
    background: #f98ea1;
    cursor: pointer;
  }
  button:active {
    outline: none;
    background: #f98ea1;
    cursor: pointer;
  }
</style>
