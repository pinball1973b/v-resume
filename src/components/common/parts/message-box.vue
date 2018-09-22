<template>
  <div class="message-wrap">
    <div class="message-inner">
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageBox',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.message-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 45px;
  z-index: 3;
  .message-inner {
    font-size: .9rem;
    margin: 0 auto;
    width: 500px;
    background: rgba(255,255,255,.6);
    text-align: center;
    color: #fff;
    padding: 5px;
  }
}
</style>
