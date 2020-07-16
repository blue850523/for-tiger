<template>
  <div id="Album">
    <!-- title -->
    <div class="title">
      <div class="left">
        <div class="btnClose btn" @click="closeBtnClick">
          <span class="svg-container svg-close">
            <svg-icon icon-class="close" />
          </span>
        </div>
        <div class="btnZoom btn">
          <span class="svg-container svg-zoom">
            <svg-icon icon-class="zoom" />
          </span>
        </div>
      </div>
      <div class="titleName">
        Album
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="pictureList">
        <!-- <li class="picture" v-for="(it,index) in 4" :key="index">
          <img :src="require(`@/assets/tiger/tiger${index+1}.jpg`)" class="index-img">
        </li> -->
        <viewer :images="imagesNum">
        <!-- imagesNum 一定要一個陣列，不然會報錯 -->
          <li class="picture" v-for="(it,index) in imagesNum" :key="it">
            <img :src="require(`@/assets/tiger/tiger${index+1}.jpg`)">
          </li>
        </viewer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imagesNum: Array(4).fill()
    }
  },
  created () {
  },
  beforeDestroy () {
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
#Album {
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
    .left {
      width: 60px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 5px;
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
      -webkit-user-select:none;
      -moz-user-select:none;
      -o-user-select:none;
      user-select:none;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 41px);
    .pictureList {
      width: 100%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      // text-align: left;
      overflow: auto;
      // display: flex;
      // flex-wrap: wrap;
      .picture {
        width: 100px;
        height: 100px;
        background: white;
        border: 1px solid #7dc8e1;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 20px;
        float: left;
      }
      img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        overflow:hidden;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  #Album{
    border-right: none;
    border-left: none;
    .title {
      .left {
        .svg-container {
          color: white !important;
        }
      }
    }
  }
}
</style>
