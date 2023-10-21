<template>
  <a-button type="primary" style="margin-right: 8px" @click="showDrawer('default')">
    Open Default Size (378px)
  </a-button>
  <a-button type="primary" @click="showDrawer('large')">Open Large Size (736px)</a-button>
  <a-drawer title="Basic Drawer" :size="size" :open="open" @close="onClose">
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onSub">Submit</a-button>
    </template>

    <antdDemoList />
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import antdDemoList from "./antdDemoList.vue";
import type { DrawerProps } from "ant-design-vue";
const open = ref<boolean>(false);
const size = ref<DrawerProps["size"]>("default");

const showDrawer = (val: DrawerProps["size"]) => {
  size.value = val;
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
const onSub = () => {
  alert("提交成功!");
  open.value = false;
};
</script>
