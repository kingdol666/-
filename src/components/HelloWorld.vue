<template>
  <el-row type="flex" justify="center" :gutter="10">
    <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="3"
      ><div class="grid-content ep-bg-purple" />
      <div class="transfer">
        <el-transfer v-model="value2" :data="data" />
      </div>
    </el-col>
    <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="3"
      ><div class="grid-content ep-bg-purple-light" />
      1</el-col
    >
    <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="3"
      ><div class="grid-content ep-bg-purple" />
      1</el-col
    >
    <el-col :xs="24" :sm="12" :md="6" :lg="3" :xl="3"
      ><div class="grid-content ep-bg-purple-light" />
      1</el-col
    >
  </el-row>
</template>

<script setup>
import { ref } from "vue";
const value = ref(new Date());

const generateData = () => {
  const data = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const data = ref(generateData());
const value2 = ref([]);
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
