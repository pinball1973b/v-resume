<template>
  <div class="resume">
    <div class="career-list">
      <h3>職務経歴</h3>
      <dl v-for="list in careerLists" :key="list.corp">
        <dt
          class="career-dt"
          @click="accordion"
        >
          <span class="years">{{list.years}}</span>
          <span class="corp">{{list.corp}}</span>
          <i class="material-icons">keyboard_arrow_down</i>
        </dt>
        <dd
          class="career-dd"
        >
          <div class="description">{{list.description}}</div>
          <div class="text" v-html="list.text"></div>
        </dd>
      </dl>
    </div>
  </div>

</template>

<script>
import * as resumeListJson from '../../../../static/js_src/resume.json'
export default {
  name: 'resume',
  data () {
    return {
      careerLists: null
    }
  },
  mounted () {
    this.careerLists = resumeListJson
  },
  methods: {
    accordion: function (event) {
      const accordionElement = event.target.parentElement.querySelector('.career-dd')
      accordionElement.classList.toggle('accordionShow')
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
    background: #f8f8f8;
  }
  .career-dd {
    display: none;
    animation: acc-back .5s ease;
    &.accordionShow {
      display: block;
      line-height: 1.8rem;
      padding: 10px;
      max-height: 300px;
      animation: acc .5s ease;
    }
    .description {
      font-size: 0.9rem;
      color: #888;
      border-bottom: solid 1px #aaa;
      margin-bottom: 10px;
      padding-bottom: 5px;
    }
  }
  @keyframes acc{
    0% {
      min-height: 0;
      max-height: 0;
      opacity: 0;
    }
    100% {
      max-height: 400px;
      opacity: 1;
    }
  }
  .career-dt {
    display: flex;
    padding: 5px;
    background: #efefef;
    position: relative;
    transition: all .4s ease-out;
    .material-icons {
      pointer-events: none;
      position: absolute;
      top: 7px;
      right: 10px;
    }
    &:hover {
      cursor: pointer;
      opacity: .8;
      box-shadow:0px 0px 14px -3px rgba(0,0,0,.7);
    }
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
