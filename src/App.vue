<template>
  <div id="app">
    <h2>Reading Recorder</h2>
    <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/search">Search</router-link></el-menu-item>
      <el-submenu index="3" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <template v-slot:title>Support</template>
          <el-menu-item index="3-1"><a href="https://wings.msn.to/" target="help" class="menu_item">Author</a></el-menu-item>
          <el-menu-item index="3-2"><a href="https://www.sbcr.jp/" target="help" class="menu_item">Publisher</a></el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul>li>a.menu_item:link, ul>li>a.menu_item:visited, ul>li>a.menu_item:active{
  color: #42b983;
}
ul>li>a.menu_item:hover{
  color: #e0da35;
}
</style>
