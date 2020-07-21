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
        <!-- <div class="btnZoom btn">
          <span class="svg-container svg-zoom">
            <svg-icon icon-class="zoom" />
          </span>
        </div> -->
      </div>
      <div class="titleName">
        Album
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="pictureList">
        <span class="pictureTitle">小虎個人沙龍照</span>
        <viewer :images="imagesNum" class="viewer">
        <!-- imagesNum 一定要一個陣列，不然會報錯 -->
          <li class="picture" v-for="(it,index) in imagesNum" :key="it">
            <img :src="require(`@/assets/tiger/tiger${index+1}.jpg`)">
          </li>
        </viewer>
        <!-- <span class="pictureTitle">小虎個人沙龍照</span>
        <viewer :images="imagesNum" class="viewer">
          <li class="picture" v-for="(it,index) in imagesNum" :key="it">
            <img :src="require(`@/assets/tiger/tiger${index+1}.jpg`)">
          </li>
        </viewer> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imagesNum: Array(25).fill()
    }
  },
  created () {
  },
  mounted () {
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
      text-align: left;
      overflow: auto;
      .pictureTitle {
        color: #7dc8e1;
        padding-bottom: 10px;
        margin: 0 0 10px 5px;
        display: inline-block;
        box-sizing: border-box;
        border-bottom: 1px solid #7dc8e1;
        width: 100%;
      }
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
    .content {
      .pictureList {
        .viewer {
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          .picture {
            margin: 5px;
            width: 33%;
            height: calc(33vw - 10px);
            flex: 0 0 calc(33% - 10px);
          }
        }
      }
    }
  }
}
</style>
