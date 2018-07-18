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
    name: 'NewSongs',
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
  .newtip {
    position: absolute;
    left: 0;
    top: 0;
    width: .5rem;
    height: .5rem;
    background: url(https://image.kuwo.cn/mpage/html5/2016/newtip.png) no-repeat;
    background-size: 100%
  }

  .newsong {
    padding: 0 20px;
  }

  .newsong h3 {
    font-size: 28px;
    height: 75px;
    line-height: 75px;
    font-weight: bold
  }

</style>
