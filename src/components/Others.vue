<template>
  <el-row type="flex" justify="center" :gutter="10">
    <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="3"
      ><div class="grid-content" />
      <el-button type="primary" @click="handleClick">Primary</el-button>
    </el-col>
    <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="3"
      ><div class="grid-content" />
      <FormLogin
    /></el-col>
    <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="3"
      ><div class="grid-content" />
      <FormTest1></FormTest1
    ></el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6"
      ><div class="grid-content" />
      <Elcomponent></Elcomponent
    ></el-col>
  </el-row>
</template>

<script setup>
import axios from "axios";
import FormLogin from "@/components/FormLogin.vue";
import FormTest1 from "@/components/Formtest2.vue";
import Elcomponent from "@/components/Carousel.vue";
const handleClick = () => {
  axios
    .get("/api/get_image_data")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple {
  background-color: purple;
}

.ep-bg-purple-light {
  background-color: lightpink;
}
.transfer {
  text-align: center;
  margin: 0;
}
</style>
