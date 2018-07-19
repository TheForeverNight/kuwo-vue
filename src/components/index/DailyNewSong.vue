<template>
  <div class="newsong">
    <h3 class="clearfix">每日新歌</h3>
    <div class="songtuijian" v-for="(newsong,index) in newsongs" :key="index">
      <a class="songmsg" href="/newh5/playlist/content?pid=1082685104">
        <i class="newtip"></i>
        <div class="songmsgpic">
          <img :src="newsong.imgSrc" />
        </div>
        <div class="other clearfix">
          <span class="listen fl">
            <span class="listennum">{{newsong.listennum}}</span>
          </span>
          <span class="playbtn fr"></span>
        </div>
      </a>
      <p>{{newsong.title}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DailyNewSong',
    data: function () {
      return {
        newsongs: [{
            title: '华语新歌推荐',
            imgSrc: 'http://img1.kwcdn.kuwo.cn/star/upload/10/10/1466668022746_.jpg',
            listennum: 5872
          },
          {
            title: '日韩新歌推荐',
            imgSrc: 'http://img1.kwcdn.kuwo.cn/star/upload/14/14/1466668131470_.jpg',
            listennum: 4089
          },
          {
            title: '欧美新歌推荐',
            imgSrc: 'http://img2.kwcdn.kuwo.cn/star/upload/3/3/1466668204339_.jpg',
            listennum: 4110
          }
        ]
      }
    }
  }

</script>
<style scoped>
  .songmsg {
    display: block;
    position: relative
  }

  .songmsgpic {
    width: 100%;
    height: 300px;
  }

  .newtip {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
    background: url(https://image.kuwo.cn/mpage/html5/2016/newtip.png) no-repeat;
    background-size: 100%
  }

  .songmsgpic img {
    width: 100%;
    height: 100%
  }

  .newsong p {
    font-size: 26px;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }

  .other {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    font-size: 22px;
  }

  .listen {
    position: relative;
    width: 30%;
    height: 100%;
    line-height: 52px;
    background: url(https://image.kuwo.cn/mpage/html5/2016/earphone.png) left center no-repeat;
    background-size: 10%;
    margin-left: 20px;
  }

  .listennum {
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translate(24px, 0);
    transform: translate(24px, 0);
    color:#fff;
  }

  .playbtn {
    width: 40px;
    height: 40px;
    background: url(https://image.kuwo.cn/mpage/html5/2016/playbtn1.png) no-repeat;
    background-size: 100%;
    margin-right: 12px;
  }

</style>
