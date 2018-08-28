<template>
  <div class="drawer">
    <div class="drawer-btn-wrap">
      <a href="javascript:void(0)"
        class="drawer-btn"
        :class="{ drwOpen: drwToggle }"
        @click="drawerView = !drawerView, drwToggle = !drwToggle"
      >
        <span class="drawer-humberger-top"></span>
        <span class="drawer-humberger-middle"></span>
        <span class="drawer-humberger-bottom"></span>
      </a>
    </div>
    <transition name="drw">
      <div
        class="drawer-contents"
        v-if="drawerView"
      >
        <ul>
          <li v-for="list in lists">
            <router-link :to="{ path: list.url }">{{list.name}}</router-link>
            <!--
            <a :href="list.url">
              {{list.name}}
            </a>
          -->
          </li>
          <li class="logout_btn">
            <a
              href="javascript:void(0)"
              @click="logout"
            >Logout</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'drawer',
  props: {
    address: {
      type: String,
      default: 'address name'
    }
  },
  data () {
    return {
      lists: [
        { name: 'Profile', url: './profile' },
        { name: 'Portfolio', url: './portfolio' }
      ],
      drawerView: false,
      drwToggle: false
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.drawer {
  .drawer-btn-wrap {
    width: 45px;
    height: 45px;
    position: fixed;
    top: 10px;
    right: 0;
    z-index: 2;
    .drawer-btn {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      &.drwOpen {
        span {
          &.drawer-humberger-top {
            top: 22px;
            transform: rotate(45deg);
          }
          &.drawer-humberger-middle {
            opacity: 0;
          }
          &.drawer-humberger-bottom {
            bottom: 22px;
            transform: rotate(-45deg);
          }
        }
      }
      span {
        display: block;
        width: 30px;
        height: 2px;
        position: absolute;
        background: #fff;
        &.drawer-humberger-top {
          top: 12px;
          left: 0;
        }
        &.drawer-humberger-middle {
          top: 22px;
          left: 0;
        }
        &.drawer-humberger-bottom {
          bottom: 12px;
          left: 0;
        }
      }
    }
  }
  .drawer-contents {
    width: 300px;
    height: calc( 100vh - 110px );
    position: fixed;
    top: 70px;
    right: 0;
    background: rgba(0,0,0,0.6);
    li {
      a {
        font-weight: 500;
        font-size: 1.8rem;
        display: block;
        padding: 5px;
        text-decoration: none;
        color: #fff;
        &:hover {
          background: rgba(255,255,255,.1);
        }
      }
      &.logout_btn {
        margin-top: 20px;
        a {
          background: #ff0000;
        }
      }
    }
  }
}
.drw-enter-active {
  animation: drw .7s ease;
}
.drw-leave-active {
  animation: drw .7s ease reverse;
}

@keyframes drw {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
