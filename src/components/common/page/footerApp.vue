<template>
  <div class="footer">
    <footer>
      <address>{{address}}</address>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footerApp',
  props: {
    address: {
      type: String,
      default: 'address name'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  height: 40px;
  box-sizing: border-box;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #222;
  color: #fff;
  text-align: center;
}
</style>
