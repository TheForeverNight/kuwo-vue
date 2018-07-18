<template>
  <div class="">
    <Banner></Banner>
    <div class="main">
      <NewSongs></NewSongs>
    </div>

  </div>
</template>
<script>
  import Banner from './Banner'
  import NewSongs from './main/NewSongs'
  export default {
    name: 'Index',
    components: {
      Banner,
      NewSongs
    }
  }

</script>
<style scoped>

</style>
