<template>
  <div class="header">
    <header>
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'headerApp',
  props: {
    title: {
      type: String,
      default: 'Vue Resume'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  box-sizing: border-box;
  background: #222;
  z-index: 2;
  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
  }
}
</style>
