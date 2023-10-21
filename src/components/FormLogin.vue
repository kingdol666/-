<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="username" prop="username">
      <el-input v-model.number="ruleForm.username" />
    </el-form-item>
    <el-form-item label="emailword" prop="email">
      <el-input v-model="ruleForm.email" type="emailword" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm" prop="checkemail">
      <el-input v-model="ruleForm.checkemail" type="emailword" autocomplete="off" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import axios from "axios";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();
const checkusername = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the username"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("Please input digits"));
    } else {
      if (value < 18) {
        callback(new Error("username must be greater than 18"));
      } else {
        callback();
      }
    }
  }, 1000);
};

const validateemail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the emailword"));
  } else {
    if (ruleForm.checkemail !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkemail", () => null);
    }
    callback();
  }
};
const validateemail2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the emailword again"));
  } else if (value !== ruleForm.email) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  email: "",
  checkemail: "",
  username: "",
});
interface User {
  username: string;
  email: string;
}
const rules = reactive<FormRules<typeof ruleForm>>({
  email: [{ validator: validateemail, trigger: "blur" }],
  checkemail: [{ validator: validateemail2, trigger: "blur" }],
  username: [{ validator: checkusername, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      const user: User = {
        username: ruleForm.username,
        email: ruleForm.email,
      };
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("email", user.email);
      makeRequest();
      saveUser(formData);
      console.log("submit!");
      console.log(ruleForm);
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

async function makeRequest() {
  try {
    const response = await axios.get("/api/user/list");

    // 请求成功处理逻辑
    console.log(response.data);
  } catch (error) {
    // 请求失败处理逻辑
    console.error(error);
  }
}

async function saveUser(formUser: FormData) {
  try {
    const response = await axios.post("/api/user/save", formUser);
    // 请求成功处理逻辑
    console.log(response.data);
  } catch (error) {
    // 请求失败处理逻辑
    console.error(error);
  }
}
</script>
