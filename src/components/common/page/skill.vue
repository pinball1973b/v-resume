<template>
  <div class="skill">
    <div class="career-list">
      <h3>スキル</h3>
      <dl v-for="list in skillList">
        <dt
          class="career-dt"
        >
         {{list.overview}}
        </dt>
        <dd
          class="career-dd"
        >
          <div class="text">
            {{list.detail}}
          </div>
        </dd>
      </dl>
    </div>
  </div>

</template>

<script>
import skillList from '../../../../static/js_src/skill.js'
export default {
  name: 'skill',
  data () {
    return {
      skillList: skillList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.career-list {
  color: #666;
  margin-bottom: 30px;
  h3 {
    font-size: 1.4rem;
    margin-bottom: 20px;
    border-bottom: 1px solid #aaa;
  }
  dl {
    margin-bottom: 15px;
    background: #f9f9f9;
  }
  .career-dd {
    padding: 10px;
  }
  .career-dt {
    font-size: 0.9rem;
    padding: 10px;
    background: #efefef;
    .years {
      pointer-events: none;
      font-size: 0.8rem;
      display: block;
      width: 150px;
      padding: 5px 0 0 5px;
    }
    .corp {
      pointer-events: none;
      font-size: 1.3rem;
      display: block;
      margin-left: 10px;
    }
  }
}
</style>
