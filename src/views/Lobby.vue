<template>
  <div id="Lobby">
    <!-- top-bar -->
    <div class="topBar">
      <span class="svg-container svg-cat" @click="isOpenLogoMenu = !isOpenLogoMenu">
        <svg-icon icon-class="cat" />
      </span>
      <transition name="logoMenuFade">
        <div
          class="logoMenu"
          v-if="isOpenLogoMenu"
        >
          <div class="logoItem" @click="infoClick()">關於小虎</div>
          <div class="logoItem" @click="sleepClicked()">睡眠</div>
        </div>
      </transition>
      <div class="right">
        <span class="Day">{{nowDay}}</span>
        <span class="Time">{{nowTime}}</span>
      </div>
    </div>
    <!-- center -->
    <div class="center">
      <div class="FileMenu">
        <div
          class="FileBox"
          v-for="(it,index) in fileData"
          :key="index"
          @click="fileClick(it.pathName)"
        >
          <File
            :svgName="it.svgName"
            :fileName="it.fileName"
            class="File"
          />
        </div>
      </div>
      <div class="FileBoard">
        <transition name="FileBoardFade" mode="out-in">
          <router-view @zoomEvent="fileBoardZoomCSS(...arguments)"/>
        </transition>
      </div>
      <transition name="FileBoardFade" mode="out-in">
        <div class="infoBlock" v-if="infoBlockOpened">
          <div class="title">
            <div class="left">
              <div class="btnClose btn" @click="infoBtnClose()">
                <span class="svg-container svg-close">
                  <svg-icon icon-class="close" />
                </span>
              </div>
            </div>
            <div class="titleName">
              關於小虎
            </div>
          </div>
          <div class="content">
            <div class="infoTop">
              <div class="infoHead">
                <img src="@/assets/tigerHead.png" class="headPic">
              </div>
              <div class="infoText">
                <h1>小虎</h1>
                <br>
                <h4>2016/10/01～2020/03/05</h4>
                <h4>飼主 Amanda Li</h4>
                <h4>原居住地 柏昕通訊</h4>
                <h4>聯絡地址 新北市蘆洲區永樂街36號</h4>
                <h4>聯絡電話 +886 8286 7968</h4>
              </div>
            </div>
            <span class="infoFooter">
              © Copyright 2020 by J.Young
            </span>
          </div>
        </div>
      </transition>
    </div>
    <!-- footer -->
    <div class="footer">
      <el-tooltip class="tooltip" effect="dark" content="Facebook" placement="top" popper-class="Newtooltip">
        <span class="svg-container svg-facebook">
          <svg-icon icon-class="facebook" />
        </span>
      </el-tooltip>
      <el-tooltip class="tooltip" effect="dark" content="Line" placement="top" popper-class="Newtooltip">
        <span class="svg-container svg-line">
          <svg-icon icon-class="line" />
        </span>
      </el-tooltip>
      <el-tooltip class="tooltip" effect="dark" content="Instagram" placement="top" popper-class="Newtooltip">
        <span class="svg-container svg-instagram">
          <svg-icon icon-class="instagram" />
        </span>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import File from '@/components/File.vue'
export default {
  components: {
    File
  },
  data () {
    return {
      nowDay: '',
      nowTime: '',
      IntervalEvent: null,
      isOpenLogoMenu: false,
      fileData: [
        {
          svgName: 'mail',
          fileName: 'Mail',
          pathName: 'Mail',
          isOpened: false
        },
        {
          svgName: 'picFolder',
          fileName: 'Album',
          pathName: 'Album',
          isOpened: false
        },
        {
          svgName: 'textFile',
          fileName: 'Grow up',
          pathName: 'GrowUp',
          isOpened: false
        }
      ],
      isfileBoardZoom: false,
      infoBlockOpened: true
    }
  },
  created () {
    this.nowTimes();
  },
  beforeDestroy () {
    clearInterval(this.IntervalEvent);
  },
  watch: {},
  computed: {},
  methods: {
    getTime (timeStamp) {
      const newdate = new Date(timeStamp)
      const weekList = ['週日', '週一', '週二', '週三', '週四', '週五', '週六']
      const week = weekList[newdate.getDay()]
      const year = newdate.getFullYear()
      //   const month = newdate.getMonth() + 1 < 10 ? (newdate.getMonth() + 1) : newdate.getMonth() + 1
      const month = newdate.getMonth() + 1
      //   const date = newdate.getDate() < 10 ? '0' + newdate.getDate() : newdate.getDate()
      const date = newdate.getDate()
      const hour =
        newdate.getHours() < 10 ? '0' + newdate.getHours() : newdate.getHours()
      const min =
        newdate.getMinutes() < 10
          ? '0' + newdate.getMinutes()
          : newdate.getMinutes()
      const sec =
        newdate.getSeconds() < 10
          ? '0' + newdate.getSeconds()
          : newdate.getSeconds()
      const noon = hour < 12 ? '上午' : '下午'

      this.nowDay = year + '年' + month + '月' + date + '日 ' + week + ' ' + noon;
      this.nowTime = hour + ':' + min + ':' + sec;
    },
    nowTimes () {
      this.getTime(new Date())
      this.IntervalEvent = setInterval(() => {
        this.getTime(new Date())
      }, 1000)
    },
    fileClick (pathName) {
      this.$router.push("/" + pathName);
    },
    fileBoardZoomCSS (isZoom) {
      this.isfileBoardZoom = isZoom;
      return this.isfileBoardZoom;
    },
    infoClick () {
      this.isOpenLogoMenu = false;
      this.infoBlockOpened = true;
    },
    infoBtnClose () {
      this.infoBlockOpened = false;
    },
    sleepClicked () {
      this.isOpenLogoMenu = false;
      this.$store.commit("SET_LOADING", true);
      this.$store.commit("SET_LOADING_TEXT", "Sleeping...");
      this.$store.commit("SET_SLEEP_MODE", true);
    }
  }
}
</script>

<style lang="scss" scoped>
#Lobby {
  border: 1px solid #7dc8e1;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  .topBar {
    height: 40px;
    border-bottom: 1px solid #7dc8e1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .svg-cat {
      cursor: pointer;
      font-size: 25px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #7dc8e1;
    }
    .logoMenu {
      border-top: 1px solid #7dc8e1;
      border-right: 1px solid #7dc8e1;
      border-bottom: 1px solid #7dc8e1;
      color: #7dc8e1;
      width: 180px;
      position: absolute;
      top: 40px;
      left: 0;
      padding: 5px 0;
      background: white;
      z-index: 999;
      -webkit-user-select:none;
      -moz-user-select:none;
      -o-user-select:none;
      user-select:none;
      .logoItem {
        cursor: default;
        width: 100%;
        margin-bottom: 5px;
        text-align: left;
        padding: 0 15px;
        box-sizing: border-box;
        transition: all .3s;
      }
      .logoItem:hover {
        background: #7dc8e1;
        color: white;
      }
    }
    .right {
      cursor: default;
      border-left: 1px solid #7dc8e1;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-weight: 700;
      color:#7dc8e1;
      -webkit-user-select:none;
      -moz-user-select:none;
      -o-user-select:none;
      user-select:none;
    }
  }
  .center {
    width: 100%;
    height: calc(100% - 40px);
    // background: url(~@/assets/BG.png) no-repeat center top;
    // background-size: contain;
    // background-attachment: fixed;
    position: relative;
    display: flex;
    .FileMenu {
      display: flex;
      flex-direction: column;
      width: 100px;
    }
    .FileBoard {
      height: calc(100% - 95px);
      width: calc(100% - 100px);
      padding:10px 10px 10px 0;
    }
    .infoBlock {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);
      height: 400px;
      width: 700px;
      border: 1px solid #7dc8e1;
      background: white;
      .title {
        width: 100%;
        height: 40px;
        position: relative;
        border-bottom: 1px solid #7dc8e1;
        display: flex;
        align-items: center;
        justify-content: center;
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
            .svg-container {
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
          -webkit-user-select:none;
          -moz-user-select:none;
          -o-user-select:none;
          user-select:none;
        }
      }
      .content {
        width: 100%;
        height: calc(100% - 41px);
        color: #7dc8e1;
        .infoTop {
          width: 100%;
          height: calc(100% - 30px);
          display: flex;
          .infoHead {
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .headPic {
              height: 60%;
            }
          }
          .infoText {
            width: 60%;
            height: 100%;
            box-sizing: border-box;
            padding: 50px 20px 20px 50px;
            text-align: left;
            line-height: 1.5;
            font-weight: 100;
          }
        }
        .infoFooter {
          display: inline-block;
          width: 100%;
          height: 20px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .footer {
    position: absolute;
    height: 60px;
    padding: 5px;
    border: 1px solid #7dc8e1;
    border-bottom: none;
    background: #7dc8e133;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .svg-container{
      width: 60px;
      height: 60px;
      font-size: 50px;
      color: #7dc8e1;
    }
  }
  // transition
  .logoMenuFade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .logoMenuFade-enter-active,
  .logoMenuFade-leave-active {
    transition: all .5s;
  }
  .logoMenuFade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  .FileBoardFade-enter {
    opacity: 0;
    transform: translateX(-10px);
  }
  .FileBoardFade-enter-active,
  .FileBoardFade-leave-active {
    transition: all .5s;
  }
  .FileBoardFade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }
}
@media only screen and (max-width: 768px) {
  #Lobby {
    .topBar {
      .right {
        .Day {
          display: none;
        }
      }
    }
    .center {
      flex-direction: column;
      height: calc(100% - 40px);
      .FileMenu {
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        .FileBox {
          flex: 1;
        }
      }
      .FileBoard {
        width: 100%;
        height: calc(100% - 180px);
        padding: 0;
      }
      .infoBlock {
        height: 70%;
        width: 100%;
        transform: translate(-50%, -40%);
        .title {
          .left {
            .svg-container {
              color: white !important;
            }
          }
        }
        .content {
          overflow: auto;
          .infoTop {
            flex-direction: column;
            align-items: center;
            height: auto;
            .infoHead {
              height: 50%;
              width: 80%;
              margin-top: 20px;
              .headPic {
                max-height: 200px;
                max-width: 200px;
                height: auto;
              }
            }
            .infoText {
              width: 80%;
              padding: 20px;
            }
          }
        }
      }
    }
    .footer {
      position: fixed;
      background: white;
      height: 40px;
      padding: 3px 3px 8px;
    }
  }
}
</style>
