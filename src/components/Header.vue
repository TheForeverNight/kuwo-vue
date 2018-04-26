<template>
  <div class="header">
      <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.header{
    width: 100%;
    height:0.88rem;
    background-color: #1da0ef;
}
.logo{
    width:2.1rem;
    height: 100%;
    background: url("./../assets/logo.png") 0 center no-repeat;
    background-size: 100%;
    margin: 0 auto;
}
</style>


