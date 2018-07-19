<template>
  <div class="program">
    <h3 class="clearfix">精彩节目</h3>
    <div class="swiper-container" id="swiper-container-3">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(program,index) in programList" :key="index">
          <a :href="program.href">
            <img :src="program.imgSrc" />
            <p class="programtitle">{{program.programtitle}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    name: 'WonderfulPorgram',
    mounted() {
      new Swiper("#swiper-container-3", {
        loop: true,
        slidesPerView: 'auto'
      });
    },
    data() {
      return {
        programList: [{
          programtitle: '酷我音乐调频',
          href: '/newh5/playlist/content?pid=1013437783',
          imgSrc: 'http://img1.kuwo.cn/star/userpl2015/shoujigd/random/3158_autob.jpg'
        }, {
          programtitle: '吐小曹扒新闻',
          href: '/newh5/playlist/content?pid=1013437785',
          imgSrc: 'http://img1.kuwo.cn/star/userpl2015/shoujigd/random/3729_autob.jpg'
        }, {
          programtitle: '《莫萱日记》音乐小品',
          href: '/newh5/playlist/content?pid=1013437787',
          imgSrc: 'http://img1.kuwo.cn/star/userpl2015/shoujigd/random/2915_autob.jpg'
        }]
      }
    }
  }

</script>

<style scoped>
  @import url("custom.css");
</style>
