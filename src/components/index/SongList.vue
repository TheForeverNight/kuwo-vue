<template>
  <div class="gedan">
    <h3 class="clearfix">歌单推荐</h3>
    <div class="swiper-container" id="swiper-container-2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(gedan,index) in gedanList" :key="index">
          <a :href="gedan.href">
            <img :src="gedan.imgSrc" />
            <p class="gedantitle">{{gedan.gedantitle}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    name: 'SongList',
    mounted() {
      new Swiper("#swiper-container-2", {
        loop: true,
        slidesPerView: 'auto'
      });
    },
    data() {
      return {
        gedanList: [{
          gedantitle: '镇魂 电视原声带',
          href: '/newh5/playlist/content?pid=2520153727',
          imgSrc: 'http://img3.kwcdn.kuwo.cn/star/userpl2015/13/50/1530845240310_419763713b.jpg'
        }, {
          gedantitle: '暗恋始终是一个人守着一座孤城',
          href: '/newh5/playlist/content?pid=820914542',
          imgSrc: 'http://img3.kwcdn.kuwo.cn/star/userpl2015/39/41/1531904509870_412265939b.jpg'
        }, {
          gedantitle: '皮一下，这些歌的歌名唱反调！',
          href: '/newh5/playlist/content?pid=889098142',
          imgSrc: 'http://img2.kwcdn.kuwo.cn/star/userpl2015/39/41/1531725564827_412265939b.jpg'
        }, {
          gedantitle: '歌里有趣的职业，哪个是儿时的梦想',
          href: '/newh5/playlist/content?pid=892568767',
          imgSrc: 'http://img4.kwcdn.kuwo.cn/star/userpl2015/39/41/1531291161877_412265939b.jpg'
        }, {
          gedantitle: '【搞笑】陪女友的正确逛街方式',
          href: '/newh5/playlist/content?pid=908045158',
          imgSrc: 'http://img2.kwcdn.kuwo.cn/star/userpl2015/39/41/1531455938821_412265939b.jpg'
        }]
      }
    }
  }

</script>
<style scoped>
  @import url('./custom.css');

</style>
