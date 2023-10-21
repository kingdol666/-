<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple-light">
        <!-- 布局内容 --><AntdDemo />
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple">
        <!-- 布局内容 --><SuleVue />
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple-light">
        <!-- 布局内容 --><ChatDemo />
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="6" class="eg-purple">
        <!-- 布局内容 --><ChatDemo2 />
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
/* .eg-purple {
  background-color: #9933ff;
}

.eg-purple-light {
  background-color: lightpink;
} */
</style>

<script setup>
import AntdDemo from "./antdDemo/antdDemo.vue";
import ChatDemo2 from "./chat/ChatDemo2.vue";
import ChatDemo from "./chat/ChatDemo.vue";
import SuleVue from "./antdDemo/sureVue.vue";
import AntdDemoForm from "./antdDemo/antdDemoForm.vue";
import AntdDemoInput from "./antdDemo/antdDemoInput.vue";
import AntdDemoStatus from "./antdDemo/antdDemoStatus.vue";
</script>
