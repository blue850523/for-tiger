<template>
  <div id="GrowUp">
    <!-- title -->
    <div class="title">
      <div class="left">
        <div class="btnClose btn" @click="closeBtnClick">
          <span class="svg-container svg-close">
            <svg-icon icon-class="close" />
          </span>
        </div>
        <!-- <div class="btnZoom btn" @click="zoomBtnClick"> -->
        <!-- <div class="btnZoom btn">
          <span class="svg-container svg-zoom">
            <svg-icon icon-class="zoom" />
          </span>
        </div> -->
      </div>
      <div class="titleName">
        Grow up
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="container">
        <div class="pic">
          <img class="img1" src="@/assets/tiger/tiger5.jpg">
        </div>
        <div class="text">
          <h2>小浪貓</h2>
          <p>Amanda在嘉義玩的時候遇到四隻生病的小浪貓，小虎就是其中一隻，把他們醫治後暫時住在朋友的店內，本來要送出去給別人養，但找不到新主人，於是有愛心的Amanda就自己帶回家養了。</p>
        </div>
      </div>

      <div class="container">
        <div class="text">
          <h2>店貓</h2>
          <p>Amanda的通訊行似乎出現老鼠了，於是Amanda把小虎接到柏昕通訊裡面嚇老鼠，剛開始小虎非常不習慣一直喵喵叫，好像還怕老鼠，最後小虎習慣了在這裏的生活於是就住在通訊行了。</p>
        </div>
        <div class="pic">
          <img class="img2" src="@/assets/tiger/tiger14.jpg">
        </div>
      </div>

      <div class="container">
        <div class="pic">
          <img class="img3" src="@/assets/tiger/tiger12.jpg">
        </div>
        <div class="text">
          <h2>小天使</h2>
          <p>Amanda發現小虎最近後腳怪怪的而且不吃不喝、悶悶不樂的，於是帶小虎去看醫生，結果發現小虎有淋巴癌，Amanda努力的想把小虎醫好，但最終小虎還是不敵病魔，為了減輕小虎的痛苦，Amanda不得已只好讓小虎安穩地走，並讓小虎成為偉大的大體老師。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      IntervalEvent: null,
      contentPosY: 0,
      contentInstance: null
    }
  },
  created () {
  },
  mounted () {
    // let oldTop = 0; // 旧数据，初始为0
    // // 将自定义方法绑定到窗口滚动条事件
    // window.onscroll = () => {
    //   let top = document.scrollingElement.scrollTop; // 触发滚动条，记录数值
    //   // 旧数据大于当前位置，表示滚动条top向上滚动
    //   if (oldTop > top) {
    //     this.show = true;
    //     console.log("↑");
    //   } else {
    //     // 相反...
    //     this.show = false;
    //     console.log("↓");
    //   }
    //   console.log(top);
    //   oldTop = top;// 更新旧的位置
    // };
    // this.contentInstance = document.getElementsByClassName("content");
    // console.log(this.contentInstance);
    // this.IntervalEvent = setInterval(() => {
    //   let contentPosY = this.contentInstance;
    //   this.contentPosY = contentPosY;
    //   console.log(this.contentInstance);
    // }, 5000);
  },
  beforeDestroy () {
    clearInterval(this.IntervalEvent);
  },
  watch: {
  },
  computed: {
  },
  methods: {
    closeBtnClick () {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss" scoped>
#GrowUp {
  height: calc(100% - 2px);
  background: white;
  border: 1px solid #7dc8e1;
  .title {
    width: 100%;
    height: 40px;
    position: relative;
    border-bottom: 1px solid #7dc8e1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 5px;
      position: absolute;
      left: 10px;
      .btn {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: #7dc8e1;
        margin: 0 5px;
        .svg-container{
          color: #7dc8e1;
        }
      }
    }
    .left:hover {
      .btn{
        .svg-container{
          color: white;
        }
      }
    }
    .titleName{
      width: calc(100% - 80px);
      color: #7dc8e1;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 41px);
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
    .container {
      display: flex;
      align-items: center;
      max-width: 1280px;
      margin: 0 auto 20px;
      .pic {
        height: 350px;
        width: 55%;
        overflow: hidden;
        flex-shrink: 0;
        position: relative;
        img {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .img1 {
          transform: translate(0%,-22%);
        }
        .img2 {
          margin-top: 0;
        }
        .img3 {
          transform: translate(0%,-22%);
        }
      }
      .text {
        width: 55%;
        flex-shrink: 0;
        padding:50px 30px;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        background: #7dc8e1cf;
        color: white;
      }
    }
    .container > :first-child {
      margin-right: -10%;
    }
  }
}
@media only screen and (max-width: 768px) {
  #GrowUp{
    border-right: none;
    border-left: none;
    .title {
      .left {
        .svg-container {
          color: white !important;
        }
      }
    }
    .content {
      .container {
        .text {
          padding: 10px;
        }
      }
    }
  }
}
</style>
