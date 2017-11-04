<template>
  <div id="app">
    <b-header></b-header>
    <b-sidebar></b-sidebar>
    <router-view/>
  </div>
</template>

<script>
import bSidebar from './components/Sidebar'
import bHeader from './components/Header'

export default {
  name: 'app',
  components: {
      bSidebar,
      bHeader
  }
}
</script>

<style>
@import url('./assets/font-awesome.css');
.fa{
  margin-right: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* responsive layout */



/* reset */
html,body{
  margin: 0;
  font-size: 16px;
  width: 100%;
  height: 100%;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
li{
  text-align: left;
}
a{
  text-decoration: none;
  color: #333;
}
h1,h2,h3,h4,h5,h6{
  margin: 0;
}
input,textarea{
  outline: none;
}
</style>
