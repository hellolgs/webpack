<template>
    <div class="bc-loging">
        <div class="bc-loging-text">
            <ul>
                <li>登录</li>
                <li>
                    <span>用户名：</span>
                    <input type="text" ref="username">
                </li>
                <li>
                    <span>密码：</span>
                    <input type="password" ref="password">
                </li>
                <li>
                    <button @click="calibration">确认</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import "./style.scss";
export default {
  name: "Loging",
  methods: {
    loging(data) {},
    calibration() {
      let refdata = this.$refs;
      let data = {
        username: refdata.username.value,
        password: refdata.password.value
      };
      this.$axios.post("/loging", data).then(res => {
          if(res.data) {
              this.$router.push('/list')
          } else {
            alert('账号或密码错误，请重新输入')
          }
      })
    }
  }
};
</script>

