<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple-light">
        <!-- 布局内容 -->1
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple">
        <!-- 布局内容 -->2
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple-light">
        <!-- 布局内容 -->3
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple">
        <!-- 布局内容 -->4
      </el-col>
    </el-row>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.eg-purple {
  background-color: #9933ff;
}

.eg-purple-light {
  background-color: lightpink;
}
</style>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
