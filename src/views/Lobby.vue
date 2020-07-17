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
          <div class="logoItem" v-for="(it, index) in logoItem" :key="it">{{logoItem[index]}}</div>
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
      logoItem: ['關於小虎', '睡眠'],
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
      isfileBoardZoom: false
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
      height: 50px;
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
