<template>
  <div id="Mail">
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
        Mail
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <!-- <div class="mailList" v-show="clientWidth > 768 ? true : !isOpenMobileMail"> -->
      <div class="mailList">
        <div
          class="mail"
          v-for="(it,index) in mailData"
          :class="index === selectMail ? clientWidth > 768 ? 'mailSelect' : '' : ''"
          :key="index"
          @click="mailClick(index)"
        >
          <div class="mailTop">
            <div class="sender">{{it.sender}}</div>
            <div class="date">{{it.date}}</div>
          </div>
          <div class="mailTitle">{{it.mailTitle}}</div>
          <div class="mailContent">{{it.mailContent}}</div>
        </div>
      </div>
      <!-- width > 768px -->
      <div class="mailView">
        <!-- {{mailData[selectMail].mailContent}} -->
        <div class="Top">
          <div class="mailViewTop">
            <div class="mailViewSender">{{mailData[selectMail].sender}}</div>
            <div class="mailViewDate">{{mailData[selectMail].time}}</div>
            <div class="mailSenderIcon">{{senderIcon(mailData[selectMail].sender)}}</div>
          </div>
          <div class="mailViewTitle">{{mailData[selectMail].mailTitle}}</div>
          <div class="mailViewAddressee"><span class="addresseeTitle">收件人：</span>{{mailData[selectMail].addressee}}</div>
        </div>
        <div class="Bottom">{{mailData[selectMail].mailContent}}</div>
      </div>
      <!-- width < 768px -->
      <transition name="mailViewMFade">
        <div class="mailViewM" v-if="isOpenMobileMail">
          <div class="mailViewMTop">
            <div class="btnBack" @click="isOpenMobileMail = false">
              <span class="svg-container svg-back">
                <svg-icon icon-class="back" />
              </span>
            </div>
            <div class="mailViewMTopContainer">
              <div class="Right">
                {{senderIcon(mailData[selectMail].sender)}}
              </div>
              <div class="Left">
                <span class="mailViewMSender">{{mailData[selectMail].sender}}</span>
                <span class="mailViewDate">{{mailData[selectMail].date}}</span>
                <div class="mailViewMAddressee"><span class="addresseeTitle">收件人：</span>{{mailData[selectMail].addressee}}</div>
              </div>
            </div>
            <div class="mailViewMTitle">
              {{mailData[selectMail].mailTitle}}
            </div>
          </div>
          <div class="mailViewMBottom">
            <div class="content">{{mailData[selectMail].mailContent}}</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectMail: 0,
      mailData: [
        {
          sender: "Amanda Li",
          addressee: "小虎",
          date: "2020/3/6",
          time: "2020年3月6日 上午 5:20",
          mailTitle: "致 無貓能敵的小勇士 小虎",
          mailContent: "2016/10/01～2020/03/05\n我最勇敢也無貓能敵的小勇士，儘管遇見你是一場意外，還是很感謝老天讓你走進我的生命，帶給我無數的歡樂。\n謝謝你如此堅強多陪了我這些時間，每每看到我因你的病痛難過落淚，你總是用你可愛的臉磨蹭我的臉要我別哭、安慰我，你是那麼貼心的小帥哥，真的很捨不得老天在你身上開了這麼大的玩笑，也害怕自己做了錯誤的決定後悔莫及。\n當情況日漸愈下，醫生和我真的別無他法了。每次帶你去醫院總是讓我很驕傲，別的貓都要先口服鎮定劑之類的藥物才能確保在就醫檢查時不會弄傷護理人員，只有你不僅不需要，還對每個醫生哥哥姊姊十分溫順的還在呼嚕嚕，看著你依然信任我們，在我懷中乖乖的讓醫生姊姊打針沉沉睡去，不讓你再痛是我最後能為你做的，你要乖乖跟著天使走，在彩虹橋上當個快樂又自在的帥哥，如果有緣分請再讓我們相遇，無論何種形式。\n你也在最後當了臺大獸醫院的大體老師，希望能在動物醫療領域奉獻微薄的力量造福更多因病痛苦的動物們，我永遠為你感到驕傲，沒貓比你更優秀了你知道嗎？\n每段生命終有終點，你只是先去等我而已，謝謝你帶給我的一切教會我什麼，我最棒最勇敢的孩子，我將永遠愛你、永不停止的想念你。"
        },
        {
          sender: "Jay Li",
          addressee: "小虎",
          date: "2020/7/14",
          time: "2020年7月14日 下午 5:20",
          mailTitle: "小虎你嘴巴超臭＝＝",
          mailContent: "你嘴巴真的超臭＝＝\n從你離開到現在已經過了四個月，你在那邊過得還好嗎？你走的前一天我們圍著你相處的畫面還歷歷在目，我想我們大家都不會輕易忘了你有多麼可愛又可恨。\n很抱歉我們的無能為力沒辦法拯救年幼的你，只能透過這種方式讓你不再疼痛，希望你不要忘了回來看看我們，讓我們知道你過得很好，謝謝你帶給我們大家的歡樂時光。"
        }
      ],
      isOpenMobileMail: false
    }
  },
  created () {
    // this.callAPI();
  },
  beforeDestroy () {
  },
  watch: {
  },
  computed: {
    clientWidth () {
      return this.$store.state.clientWidth;
    }
  },
  methods: {
    closeBtnClick () {
      this.$router.push("/");
    },
    mailClick (index) {
      this.selectMail = index;
      if (this.clientWidth < 768)
        this.isOpenMobileMail = true;
      else
        this.isOpenMobileMail = false;
    },
    senderIcon (name) {
      let textArr = name.split('');
      return textArr[0]
    },
    callAPI () { // json-server db.json
      this.$axios
        .get(this.$api.mailData)
        .then(res => {
          let data = res;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
#Mail {
  height: calc(100% - 2px);
  background: white;
  border: 1px solid #7dc8e1;
  color: #7dc8e1;
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
        .svg-container {
          color: #7dc8e1;
        }
      }
    }
    .left:hover {
      .btn {
        .svg-container {
          color: white;
        }
      }
    }
    .titleName {
      width: calc(100% - 80px);
      color: #7dc8e1;
      -webkit-user-select:none;
      -moz-user-select:none;
      -o-user-select:none;
      user-select:none;
    }
  }
  .content {
    height: calc(100% - 41px);
    display: flex;
    position: relative;
    .mailList {
      width: 300px;
      overflow: auto;
      box-sizing: border-box;
      border-right: 1px solid #7dc8e1;
      padding-left: 20px;
      .mail {
        padding: 2px 5px 0 0;
        cursor: pointer;
        transition: all .3s;
        border-bottom: 1px solid #7dc8e1;
        .mailTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .sender {
            font-weight: 600;
          }
        }
        .mailTitle {
          text-align: left;
          font-weight: 600;
        }
        .mailContent {
          text-align: left;
          width: 100%;
          overflow:hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal;
        }
      }
      .mail:hover {
        background: #7dc8e16d;
        color: white;
      }
      .mailSelect {
        background: #7dc8e1;
        color: white;
      }
    }
    .mailView {
      width: calc(100% - 300px);
      overflow: auto;
      .Top {
        text-align: left;
        padding: 5px 20px;
        line-height: 2;
        border-bottom: 1px solid #7dc8e1;
        .mailViewTop {
          display: flex;
          justify-content: space-between;
          position: relative;
          .mailViewSender {
            font-weight: 600;
          }
          .mailViewDate {
            position: relative;
            right: 60px;
          }
          .mailSenderIcon {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 0;
            border-radius: 50%;
            background: #7dc8e1;
            color: white;
            width: 40px;
            height: 40px;
            text-align: center;
          }
        }
        .mailViewTitle {
          font-weight: 600;
        }
        .mailViewAddressee {
          .addresseeTitle {
            font-weight: 600;
          }
        }
      }
      .Bottom {
        width: 100%;
        line-height: 2;
        padding: 20px;
        box-sizing: border-box;
        white-space: pre-wrap;
        text-align: left;
      }
    }
    .mailViewM {
      display: none;
    }
  }
  // transition
  .mailViewMFade-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .mailViewMFade-enter-active,
  .mailViewMFade-leave-active {
    transition: all .5s;
  }
  .mailViewMFade-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
}
@media only screen and (max-width: 768px) {
  #Mail{
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
      overflow: auto;
      overflow-x: hidden;
      .mailList {
        width: 100%;
        border: none;
      }
      .mailView {
        display: none;
      }
      .mailViewM {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        .mailViewMTop {
          width: 100%;
          border-bottom: 1px solid #7dc8e1;
          box-sizing: border-box;
          padding: 5px 0 5px 40px;
          position: relative;
          text-align: left;
          .btnBack {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 0;
            top: 0;
          }
          .mailViewMTopContainer {
            border-bottom: 1px solid #7dc8e1;
            display: flex;
            .Right {
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background: #7dc8e1;
              color: white;
              width: 40px;
              height: 40px;
              text-align: center;
              margin-right: 10px;
            }
            .mailViewMSender {
              font-weight: 600;
            }
            .mailViewDate {
              position: absolute;
              right: 20px;
            }
            .mailViewMAddressee {
              padding-bottom: 10px;
              .addresseeTitle {
                font-weight: 600;
              }
            }
          }
          .mailViewMTitle {
            padding: 5px 20px 0 0;
            font-size: 20px;
            font-weight: 600;
          }
        }
        .mailViewMBottom {
          width: 100%;
          line-height: 2;
          padding: 20px;
          box-sizing: border-box;
          white-space: pre-wrap;
          text-align: left;
        }
      }
    }
  }
}
</style>
