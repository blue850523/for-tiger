<template>
  <div id="File">
    <div class="File">
      <span
        class="svg-container"
        :class="`svg-${svgName}`"
      >
        <svg-icon :icon-class="`${svgName}`" />
      </span>
      <div class="FileName" v-if="isShowFileName">
        {{fileName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "File",
  props: {
    // isMobile: {
    //   type: Boolean,
    //   default: false
    // },
    svgName: {
      type: String,
      default: 'textFile'
    },
    fileName: {
      type: String,
      default: 'File'
    },
    isShowFileName: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
#File {
  .File {
    width: 75px;
    // height: 80px;
    display: inline-block;
    box-sizing: border-box;
    margin: 10px;
    border-radius: 5px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
    // box-sizing: border-box;
    .svg-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      border-radius: 5px;
      margin-bottom: 5px;
      transition: all .5s;
      color: #7dc8e1;
      background: white;
    }
    .FileName {
      // width: 100%;
      color:#7dc8e1;
      cursor: default;
      border-radius: 5px;
      transition: all .5s;
    }
  }
  @media (hover: hover) {
    .File:hover {
      .svg-container {
        background: #7dc8e16d;
      }
      .FileName {
        background: #7dc8e16d;
      }
    }
  }
}
</style>
