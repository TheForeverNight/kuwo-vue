<template>
  <div class="nav">
    <ul>
      <template v-for="(item,index) in navList">
        <router-link class="navitem" v-if="index == 0" :key="index" tag="li" :to="item.url" exact>{{item.title}}</router-link>
        <router-link v-else class="navitem" :key="index" tag="li" :to="item.url">{{item.title}}</router-link>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data: function () {
      return {
        navList: [{
            title: "推荐",
            url: "/"
          },
          {
            title: "排行",
            url: "/rank"
          },
          {
            title: "分类",
            url: "/category"
          },
          {
            title: "歌手",
            url: "/singer"
          },
          {
            title: "MV",
            url: "/mv"
          }
        ]
      };
    }
  };

</script>


<style lang="scss" scoped>
  $border-clor:#2095dd;
  .nav {
    width: 100%;
    height: 79px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    position: fixed;
    left: 0;
    top: 88px;
    z-index: 2;
    .navitem {
      float: left;
      width: 20%;
      text-align: center;
      line-height: 78px;
      color: #333;
      border-bottom: 2px solid transparent;
    }
    .navitem.active {
      color: #2095dd;
      border-bottom: 2px solid $border-clor;
    }
  }

</style>
