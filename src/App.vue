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
  font-family: "Helvetica Neue",Arial,"Hiragino Sans GB",STHeiti,"Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* postcss common css */
.clearFloat::after {
    content: ' ';
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
}


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

/* responsive layout */
@media (width <= 768px) {
    body{
      font-size: 20px;
    } 
}
</style>
