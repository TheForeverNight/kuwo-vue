<template>
  <div class="hotmv">
    <h3 class="clearfix">热门MV</h3>
    <div class="swiper-container" id="swiper-container-4">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(mv,index) in mvList" :key="index">
          <a href="javascript:void(0);">
            <img :src="mv.imgSrc" />
            <p class="mvtitle">{{mv.mvtitle}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Swiper from "swiper";
import hotmv01 from "../../assets/images/hotmv01.jpg";
import hotmv02 from "../../assets/images/hotmv02.jpg";
export default {
  name: "HotMv",
  mounted() {
    new Swiper("#swiper-container-4", {
      loop: true,
      slidesPerView: 'auto'
    });
  },
  data() {
    return {
      mvList: [
        {
          mvtitle: "张杰张碧晨为平凡发声，用歌声表达《只要平凡》",
          imgSrc: hotmv01
        },
        {
          mvtitle: "李宇春《一趟》live-身着\"热气球装\"震撼收官巡演",
          imgSrc: hotmv02
        }
      ]
    };
  }
};
</script>
<style scoped>
.swiper-slide {
  width: 335px;
  margin-right: 40px;
}

.swiper-slide img {
  width: 100%;
  height: 214px;
  pointer-events: none;
}
.swiper-slide p {
  width: 100%;
  color: #333;
  text-align: left;
  font-size: 24px;
  line-height: 32px;
  padding-top: 6px;
}
</style>