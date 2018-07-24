<template>
  <div id="app">
    <Header/>
    <Nav />
    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/common/Header';
import Nav from './components/common/Nav';

export default {
  name: 'App',
  components: {
    Header,
    Nav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 28px;
  padding-bottom: 1000px;
}
.router-view{
  width: 100%;
  margin-top: 168px;
  height: auto;
}
</style>
