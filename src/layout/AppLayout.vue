<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside class="aside">
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header class="header"><Header /></el-header>
        <el-main class="main"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import AppMenu from "../layout/AppMenu.vue";
import Header from "../components/Header.vue";
</script>
<style scoped lang="scss">
.container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px !important;
  /*外部间距也是如此设置*/
  margin: 0px !important;
  /*统一设置高度为100%*/
  height: 100vh;
}
</style>
