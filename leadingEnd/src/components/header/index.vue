<template>
    <div class="bc-header">
        <div>
            <p>贝程后台管理系统</p>
            <p>
                <span>欢迎您：{{username}}</span>
                <a href="/loging/remove">退出登录</a>
            </p>
        </div>
    </div>
</template>
<script>
import "./style.scss";
export default {
  name: "commonHeader",
  data() {
      return {
          username:'',
      }
  },
  created() {
      this.$axios.post('/loging/sess',{}).then(res => {
          if(res.username) {
            this.username = res.username;
          } else {
              this.$router.push('/loging')
          }

      })
  }
};
</script>

