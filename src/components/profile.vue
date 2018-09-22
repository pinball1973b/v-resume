<template>
  <div class="wrap" id="wrap">
    <headerApp title="Profile" />
    <main>
      <div class="inner">
        <div class="main">
          <basic />
          <resume />
          <skill />
        </div>
        <div class="sidebar">
          <drawer />
        </div>
      </div>
    </main>
    <message-box  v-if="messageBox" :message="message" />
    <footerApp address="pinball1973b@gmail.com" />
  </div>
</template>

<script>
import headerApp from '@/components/common/page/headerApp'
import footerApp from '@/components/common/page/footerApp'
import basic from '@/components/common/page/basic'
import resume from '@/components/common/page/resume'
import skill from '@/components/common/page/skill'
import drawer from '@/components/common/page/drawer'
import messageBox from '@/components/common/parts/message-box'

export default {
  name: 'profile',
  components: {
    headerApp,
    footerApp,
    basic,
    resume,
    skill,
    drawer,
    messageBox
  },

  data () {
    return {
      message: 'message',
      messageBox: false
    }
  },

  methods: {
    loginMessage () {
      this.message = 'ログインしました'
      this.messageBox = true
    },

    messageHide () {
      this.messageBox = false
    }
  },

  mounted () {
    this.loginMessage()
    setTimeout(this.messageHide, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  padding: 70px 0 40px 0;
  .inner {
    .main {
      animation: fade .5s ease-in;
      h2 {
        font-weight: 500;
        font-size: 1.6rem;
        margin-bottom: 20px;
      }
      padding: 10px;
      width: 90%;
      margin: auto;
    }
  }
}


@keyframes fade{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
