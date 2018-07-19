<template>
  <div class="">
    <Banner></Banner>
    <div class="strip"></div>
    <div class="main">
      <DailyNewSong></DailyNewSong>
      <div class="strip"></div>
      <SongList></SongList>
      <div class="strip"></div>
      <WonderfulPorgram></WonderfulPorgram>
      <div class="strip"></div>
    </div>

  </div>
</template>
<script>
  import './../../assets/css/swiper.min.css';
  import Banner from './Banner'
  import DailyNewSong from './DailyNewSong'
  import SongList from './SongList'
  import WonderfulPorgram from './WonderfulPorgram'

  export default {
    name: 'Index',
    components: {
      Banner,
      DailyNewSong,
      SongList,
      WonderfulPorgram
    }
  }

</script>
<style>
  .newsong,
  .gedan,
  .program,
  .mmhost,
  .hotmv {
    padding: 20px;
    color: #333
  }

  .main h3 {
    font-size: 28px;
    height: 80px;
    line-height: 80px;
    font-weight: bold;
    color: #333;
  }

  .strip {
    width: 100%;
    height: 20px;
    background: #e8e8e8;
  }

</style>
