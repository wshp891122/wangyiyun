<template>
  <div class="login">
    <div>
      <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    </div>
    <div>
      <el-input v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <div>
      <el-button @click="loginClick">登陆</el-button>
    </div>
  </div>
</template>
<script>

import { login } from "../api"
export default {
  data() {
    return {
      phone: "15668783368",
      password: "ccllmm000000"
    }
  },
  methods: {
    loginClick() {
      login({ phone: this.phone, password: this.password }).then(res => {
        console.log(res, "login")
        // 存储cookie
        localStorage.setItem("user", JSON.stringify({ cookie: res.data.cookie, id: res.data.account.id }))
        this.$router.history.replace("/font")
      })
    }
  },
}
</script>

<style >
.login {
  height: 100vh;
  background: #c20c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

.login .el-input {
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-bottom: 1px solid #fff;
}
.login .el-form-item__label {
  color: #fff;
}
</style>
