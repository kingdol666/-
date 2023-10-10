<template>
  <div class="logo">
    <div class="left-content"><img src="../assets/vue.svg" alt="logo" /></div>
    <div class="right-content">我的小小项目案例</div>
  </div>
  <el-menu
    default-active="2"
    :collapse="props.isCollapse"
    :collapse-transition="false"
    @open="handleOpen"
    @close="handleClose"
    background-color="#ebf1f5"
    text-color="#606266"
    active-text-color="#2F74FF"
    class="menu"
    router
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>展开下拉导航</span>
      </template>
      <el-menu-item-group>
        <template #title><span>分组一</span></template>
        <el-menu-item index="/">item one</el-menu-item>
        <el-menu-item index="/">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组二">
        <el-menu-item index="/">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-1">
        <template #title><span>item four</span></template>
        <el-menu-item index="/">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/test">
      <el-icon><icon-menu /></el-icon>
      <template #title>To test</template>
    </el-menu-item>
    <el-menu-item index="/user" disabled>
      <el-icon><document /></el-icon>
      <template #title>To User</template>
    </el-menu-item>
    <el-menu-item index="/other">
      <el-icon><setting /></el-icon>
      <template #title>to Others!</template>
    </el-menu-item>
    <el-menu-item index="/">
      <el-icon><setting /></el-icon>
      <template #title>to Home!</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";

const props = defineProps(["isCollapse"]);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px;
}

.logo img {
  width: 100px;
  height: auto;
}

.logo .left-content {
  display: flex;
  align-items: center;
}

.logo .right-content {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  font-size: 24px;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.menu {
  min-height: calc(100vh - 80px);
}
</style>
