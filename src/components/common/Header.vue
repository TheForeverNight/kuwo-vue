<template>
  <div class="header">
      <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>
.header{
    width: 100%;
    height:88px;
    background-color: #1da0ef;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
}
.logo{
    width:210px;
    height: 100%;
    background: url("./../../assets/images/logo.png") 0 center no-repeat;
    background-size: 100%;
    margin: 0 auto;
}
</style>


