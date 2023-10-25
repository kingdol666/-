<template>
  <div class="chat-box">
    <div class="message-list">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <div class="message-content" :class="{ self: message.self }">
          <span v-if="!message.self" class="message-user">{{ message.user }}</span>
          <div class="message-text">{{ message.text }}</div>
        </div>
      </div>
    </div>
    <div class="input-box">
      <input
        type="text"
        v-model="messageText"
        @keydown.enter="addMessage"
        placeholder="请输入消息内容"
      />
      <button @click="addMessage">发送</button>
    </div>
    <button @click="test2">清空</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      messages: [
        { user: "小明", text: "你好啊", self: false },
        { user: "", text: "你好", self: true },
      ],
      messageText: "",
    };
  },
  methods: {
    test2() {},
    async getBackData() {
      var formData = new FormData();
      formData.append("text", this.messageText);
      var textValue = formData.get("text");
      console.log(textValue);
      try {
        // 发送POST请求并携带表单数据
        const response = await axios.post("/api/get_shici", formData);

        // 处理响应结果
        const newText = response.data["text"];
        console.log(newText);
        this.messages.push({
          user: "对穿肠",
          text: newText,
          self: false,
        });
      } catch (error) {
        console.error(error);
      }
    },
    addMessage() {
      if (!this.messageText) return;
      this.getBackData();

      this.messages.push({
        user: "",
        text: this.messageText,
        self: true,
      });
      this.messageText = "";
    },
  },
};
</script>

<style>
.chat-box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.message-list {
  flex: 1;
  overflow-y: auto;
}

.message {
  display: flex;
  margin: 4px 0;
}

.self .message-content {
  justify-content: flex-end;
}

.message-content {
  display: flex;
  flex-direction: column;
  max-width: 70%;
  padding: 6px 10px;
  background-color: #d9edf7;
  border-radius: 15px;
}

.message-user {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 6px;
}

.message-text {
  font-size: 14px;
}

.input-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

.input-box input {
  flex: 1;
  margin-right: 10px;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.input-box button {
  padding: 6px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-box button:hover {
  background-color: #388e3c;
}
</style>
