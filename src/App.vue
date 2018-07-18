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
import Header from './components/Header';
import Nav from './components/Nav';

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
  color: #2c3e50;
  font-size: 28px;
}
.router-view{
  width: 100%;
  margin-top: 154px;
  height: auto;
}
</style>
