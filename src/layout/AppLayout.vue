<template>
  <div class="common-layout">
    <el-container class="container1">
      <!-- <el-aside class="aside">
        <AppMenu />
      </el-aside> -->
      <el-aside class="aside" :collapse="!sidebarVisibility" v-if="sidebarVisibility">
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <el-button
              size="large"
              color="#626aef"
              :dark="isDark"
              @click="sidebarVisibility = !sidebarVisibility"
              :full="true"
            >
              {{ sidebarVisibility ? "隐藏" : "展开" }}
            </el-button>
            <img
              src="../assets/vue.svg"
              alt=""
              style="max-width: 100%; height: auto; border-radius: 8px"
            />
            <span
              style="
                font-family: Arial, sans-serif;
                font-size: 23px;
                font-weight: bold;
                color: #46b620;
              "
            >
              测试案例后台
            </span>
          </div>

          <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-main class="main"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AppMenu from "../layout/AppMenu.vue";
import Header from "../components/Header.vue";
export default {
  data() {
    return {
      sidebarVisibility: true,
    };
  },
  beforeMount() {
    // Code to execute before the window loads
    console.log("Code executed before window loads");
  },
  components: {
    AppMenu,
  },
};
</script>
<style scoped lang="scss">
.container1 {
  padding: 0 !important;
  margin: 0 !important;
  height: 100vh;
}

.el-header {
  background-color: #2873bf;
  // 给头部设置一下弹性布局
  display: flex;
  // 让它贴标左右对齐
  justify-content: space-between;
  // 清空图片左侧padding
  padding-left: 0;
  // 按钮居中
  align-items: center;
  // 文本颜色
  color: #fff;
  // 设置文本字体大小
  font-size: 20px;
  // 嵌套
  > div {
    // 弹性布局
    display: flex;
    // 纵向上居中对齐
    align-items: center;
    // 给文本和图片添加间距，使用类选择器
    span {
      margin-left: 15px;
    }
  }
}
</style>
