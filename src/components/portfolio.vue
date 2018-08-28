<template>
  <div class="wrap" id="wrap">
    <headerApp title="Portfolio" />
    <main>
      <div class="inner">
        <div class="main">
          <reference />
        </div>
        <div class="sidebar">
          <drawer />
        </div>
      </div>
    </main>

    <footerApp address="pinball1973b@gmail.com" />
  </div>
</template>

<script>
import headerApp from '@/components/common/page/headerApp'
import footerApp from '@/components/common/page/footerApp'
import reference from '@/components/common/page/reference'

import drawer from '@/components/common/page/drawer'

export default {
  name: 'index',
  components: {
    headerApp,
    footerApp,
    reference,
    drawer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  padding: 70px 0 40px 0;
  animation: fade .5s ease-in;
  .inner {
    .main {
      h2 {
        font-weight: 500;
        font-size: 1.6rem;
        margin-bottom: 20px;
      }
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
