<template>
  <div class="wrap" id="wrap">
    <headerApp title="login" />
    <main>
      <div class="inner">
        <div class="main">
          <form>
            <input type="text" placeholder="Username" v-model="username" class="username">
            <input type="password" placeholder="Password" v-model="password" class="password">
            <button @click="signIn" class="submit">Signin</button>
          </form>
        </div>
      </div>
    </main>
    <!--あとでリファクタ -->
    <div v-if="messageBox" class="message-wrap">
      <div class="message-inner">
        <p>{{message}}</p>
      </div>
    </div>
    <footerApp address="pinball1973b@gmail.com" />
  </div>
</template>

<script>
import headerApp from '@/components/common/page/headerApp'
import footerApp from '@/components/common/page/footerApp'
import drawer from '@/components/common/page/drawer'
import firebase from 'firebase'

export default {
  name: 'index',
  components: {
    headerApp,
    footerApp,
    drawer
  },
  data () {
    return {
      username: '',
      password: '',
      // 後でリファクタ
      message: 'message',
      messageBox: false
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          this.$router.push('/profile')
        },
        err => {
          this.message = err.message
          this.messageBox = true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  padding: 70px 0 40px 0;
  .inner {
    .main {
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
  }
}

.username,
.password {
  font-size: .9rem;
  border: none;
  background: #eee;
  padding: 10px 5px;
  width: 400px;
  box-sizing: border-box;
  margin-bottom: 10px;
  &:focus {
    background: #fefefe;
    outline: none;
    box-shadow:0px 0px 16px -3px rgba(0,0,0,.6);
  }
}

// あとでリファクタ
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

.submit {
  font-size: 1rem;
  border: none;
  background: #006eff;
  color: #fff;
  padding: 5px;
  width: 400px;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #efefef inset;
}

</style>
