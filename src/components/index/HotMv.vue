<template>
  <div class="hotmv">
    <h3 class="clearfix">热门MV</h3>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(mv,index) in mvList" :key="index">
          <a href="javascript:void(0);">
            <img :src="mv.imgSrc" />
            <p class="mvtitle">张靓颖《不念》-空灵大气嗓音道尽古剑江湖故事</p>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "HotMv",
    data() {
      return {
        mvList: [{
          mvtitle: '张靓颖《不念》-空灵大气嗓音道尽古剑江湖故事',
          imgSrc: 'http://img1.kwcdn.kuwo.cn/star/upload/12/12/1531907219132_.jpg'
        }, {
          mvtitle: '霍尊携手方文山共同打造国风加成《风语咒》',
          imgSrc: 'http://img4.kwcdn.kuwo.cn/star/upload/11/11/1531907079227_.jpg'
        }]
      }
    }
  }

</script>
