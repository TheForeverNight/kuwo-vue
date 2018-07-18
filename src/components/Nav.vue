
<template>
  <nav class="nav">
      <ul>
         <template  v-for="(item,index) in navList"  >
            <router-link class="navitem" v-if="index == 0" :key="index"  tag="li" :to="item.url" exact>{{item.title}}</router-link>
            <router-link v-else class="navitem" :key="index"  tag="li" :to="item.url">{{item.title}}</router-link>
        </template>
      </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return {
      navList: [
        {
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

<style>
.nav {
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  position: fixed;
  left: 0;
  top:80px;
  z-index: 2;
}
.nav .navitem {
  float: left;
  width: 20%;
  text-align: center;
  line-height: 72px;
  color: #333;
  border-bottom: 2px solid transparent;
}
.nav .navitem.active {
  color: #2095dd;
  border-bottom: 2px solid #2095dd;
}
</style>

