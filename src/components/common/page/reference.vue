<template>
  <div class="reference">
    <section class="article_inner">
      <article
        class="grid_box"
        v-for="grid in referenceList"
        :key="grid.box1_title"
      >
        <div
          class="box_wrap"
          @click="gridOpen"
        >
          <div
            class="img_box img1"
            :style="{ 'background-image': 'url(' + grid.img1 + ')' }"
          >
          </div>
          <div
            class="detail_box box1"
            :style="{ color: grid.box1_color, background: grid.box1_bgcolor }"
          >
            <div class="display_text">
              <h3>{{grid.box1_title}}</h3>
              <div class="box_detail3">{{grid.box1_detail3}}</div>
            </div>
            <div class="detail_text">
              <div class="box_detail2">{{grid.box1_detail2}}</div>
              <div class="box_detail1">{{grid.box1_detail1}}</div>
              <div class="box_url">
                {{grid.box1_url}}
              </div>
            </div>
          </div>

        </div>
        <div
          class="box_wrap"
          @click="gridOpen"
        >
          <div
            class="img_box img2"
            :style="{ 'background-image': 'url(' + grid.img2 + ')' }"
          ></div>
          <div
            class="detail_box box2"
            :style="{ color: grid.box2_color, background: grid.box2_bgcolor }"
          >
          <div class="display_text">
            <h3>{{grid.box2_title}}</h3>
            <div class="box_detail3">{{grid.box2_detail3}}</div>
          </div>
            <div class="detail_text">
              <div class="box_detail2">{{grid.box2_detail2}}</div>
              <div class="box_detail1">{{grid.box2_detail1}}</div>
              <div class="box_url">
                {{grid.box2_url}}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <transition name="pop_slide">
      <section class="pop_open_box" v-if="popBox">
        <div class="overlay">
          <div class="open_grid_element">
            <div class="inner">
              <div
                class="img_box"
                :style="box.image"
                :class="{slide:!textSlide}"
              >
              </div>
              <div
                class="pop_text_box"
                :style="box.style"
                :class="{slide:!textSlide}"
              >
                <div class="detail_text">
                  <h3>{{box.title}}</h3>
                  <div class="box2_detail1">{{box.detail1}}</div>
                  <div class="box2_detail2">{{box.detail2}}</div>
                  <div class="box2_detail3">{{box.detail3}}</div>
                  <div class="url">
                    <a
                      :href="box.url"
                      :style="box.style"
                      target="_blank"
                    >
                      {{box.url}}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="box_close"
              :class="{slide:!textSlide}"
            >
              <button
                class="close_btn"
                @click="closeBox"
              >
                <i class="material-icons">close</i>
              </button>
            </div>
            <div
              class="box_slide"
              :class="{slide:!textSlide}"
            >
              <button
                class="slide_btn"
                @click="textSlide = !textSlide"
              >
                <i class="material-icons">arrow_forward</i>
              </button>
            </div>

          </div>
        </div>
      </section>
    </transition>
  </div>

</template>

<script>
import * as referenceListJson from '../../../../static/js_src/reference.json'
export default {
  name: 'reference',
  data () {
    return {
      referenceList: null,
      box: {
        image: '',
        style: '',
        title: '',
        detail1: '',
        detail2: '',
        detail3: '',
        url: ''
      },
      popBox: false,
      textSlide: true
    }
  },
  mounted () {
    this.referenceList = referenceListJson
  },
  methods: {
    gridOpen: function (event) {
      const elementWrap = event.target
      const image = elementWrap.querySelector('.img_box').getAttribute('style')
      const style = elementWrap.querySelector('.detail_box').getAttribute('style')
      const title = elementWrap.querySelector('h3').textContent
      const detail1 = elementWrap.querySelector('.box_detail1').textContent
      const detail2 = elementWrap.querySelector('.box_detail2').textContent
      const detail3 = elementWrap.querySelector('.box_detail3').textContent
      const url = elementWrap.querySelector('.box_url').textContent

      this.box.image = image
      this.box.style = style
      this.box.title = title
      this.box.detail1 = detail1
      this.box.detail2 = detail2
      this.box.detail3 = detail3
      this.box.url = url
      this.popBox = true
      this.textSlide = true
    },

    closeBox () {
      this.popBox = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pop_slide-enter-active {
  animation: fade .7s ease;
  .overlay {
    .box_close {
      animation: fade 1s ease;
    }
    .img_box {
      animation: img .7s ease-in;
    }
    .pop_text_box {
      animation: txt .7s ease-in;
    }
  }
}
.pop_slide-leave-active {
  animation: fade .7s ease reverse;
  .overlay {
    .box_close {
      animation: fade .3s ease reverse;
    }
    .img_box {
      animation: img .7s ease-in reverse;
    }
    .pop_text_box {
      animation: txt .7s ease-in reverse;
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
@keyframes img {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes txt {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.pop_open_box {
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.6);
    .open_grid_element {
      position: relative;
      .inner {
        display: flex;
        padding: 68px 0 44px 0;
        .img_box {
          width: 70%;
          height: 100vh;
          position: relative;
          background-size: cover;
          background-position: top;
          &.slide {
            width: 100%;
            animation: img_width .7s ease;
          }
        }
        .pop_text_box {
          width: 30%;
          height: 100vh;
          position: relative;
          &.slide {
            .detail_text {
              display: none;
            }
            width: 0;
            animation: txt_width .7s ease;
          }
          .detail_text {
            width: 90%;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            h3 {
              margin-bottom: 20px;
              font-size: 2rem;
            }
            div {
              margin-bottom: 10px;
              line-height: 1.8rem;
            }
          }
        }
      }
      .box_close {
        position: absolute;
        top: 70%;
        left: 70%;
        transform: translateY(-50%) translateX(-50%);
        z-index: 2;
        width: 40px;
        height: 40px;
        &.slide {
          left: calc( 100% - 40px );
        }
        .close_btn {
          display: block;
          width: 100%;
          height: 100%;
          color: #fff;
          background: rgba(0,0,0,0.6);
          outline: none;

          &:hover {
            cursor: pointer;
          }
        }
      }
      .box_slide {
        position: absolute;
        top: 30%;
        left: 70%;
        transform: translateY(-50%) translateX(-50%);
        z-index: 2;
        width: 40px;
        height: 40px;
        &.slide {
          left: calc( 100% - 40px );
          .material-icons {
            transform: rotate(180deg);
          }
        }
        .slide_btn {
          display: block;
          width: 100%;
          height: 100%;
          color: #fff;
          background: rgba(0,0,0,0.6);
          outline: none;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
.grid_box {
  display: flex;
  height: 30vh;
  &:nth-child(even) {
    .box_wrap {
      width: 50%;
      flex-direction: row-reverse;
    }
  }
  .box_wrap {
    display: flex;
    width: 50%;
    cursor: pointer;
    transition: all .6s ease;
    &:hover {
      opacity: .6;
    }
    .img_box {
      width: 50%;
      height: 100%;
      background-size: cover;
      pointer-events: none;
    }
    .detail_box {
      width: 50%;
      pointer-events: none;
      position: relative;
      .display_text {
        width: 90%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        .box_detail3 {
          font-size: 0.9rem;
        }
        h3 {
          font-size: 1.6rem;
          margin-bottom: 5px;
        }
      }
      .detail_text {
        display: none;
      }
    }
  }
}
@keyframes txt_width{
  0%{
    width: 30%;
  }
  100% {
    width: 0%;
  }
}

@keyframes img_width{
  0%{
    width: 70%;
  }
  100% {
    width: 100%;
  }
}
</style>
