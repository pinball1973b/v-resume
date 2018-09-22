<template>
  <div class="basic">
    <div class="career-list">
      <h3>基本情報</h3>
      <dl v-for="list in basicList" :key="list.overview">
        <dt
          class="career-dt"
        >
          {{list.overview}}
        </dt>
        <dd
          class="career-dd"
        >
          {{list.detail}}
        </dd>
      </dl>
    </div>
  </div>

</template>

<script>
import * as basicListJson from '../../../../static/js_src/basic.json'
export default {
  name: 'resume',
  data () {
    return {
      basicList: basicListJson
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.career-list {
  color: #666;
  border-bottom: 1px solid #aaa;
  margin-bottom: 30px;
  h3 {
    font-size: 1.4rem;
    margin-bottom: 20px;
    border-bottom: 1px solid #aaa;
  }
  dl {
    border-top: 1px solid #aaa;
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
    display: flex;
    .career-dd {
      padding: 10px;
      width: calc( 100% - 150px );
    }
    .career-dt {
      width: 150px;
      padding: 10px;
      background: #666;
      color: #fff;
    }
  }
}
</style>
