<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div v-for="(item,index) in images" :key="index" class="swiper-slide">
            <img :src="item">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
<!-- 导航等组件可以放在container之外 -->
</template>

<script>
import './../../assets/css/swiper.min.css';
import Swiper from 'swiper';
export default {
  name: "Banner",
  data() {
    return {
      images: [
        "http://img1.kwcdn.kuwo.cn/star/upload/10/10/1482312358874_.jpg",
        "http://img2.kwcdn.kuwo.cn/star/upload/10/10/1453347776330_.jpg",
        "http://img3.kwcdn.kuwo.cn/star/upload/15/15/1524794792975_.jpg",
        "http://img4.kwcdn.kuwo.cn/star/upload/4/4/1480909297444_.jpg"
      ]
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      });
    }
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 312px;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.swiper-pagination-bullet{
  width: 16px;
  height: 16px;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 0.1rem;
}
</style>
