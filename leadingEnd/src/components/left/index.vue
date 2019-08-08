<template>
    <div class="bc-common-left">
        <el-row class="tac">
            <el-col :span="12" style="width:100%;">
                <el-menu>
                <el-menu-item index="1" @click="handleOpen" style="max-width:300px;">
                    <i class="el-icon-menu"></i>
                    <span slot="title">招生详情页</span>
                </el-menu-item>
                <el-menu-item index="2" @click="handleClose">
                    <i class="el-icon-setting"></i>
                    <span slot="title">招生信息页</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import "./style.scss";
export default {
  name: "Left",
  methods: {
    handleOpen(key, keyPath) {
      if (this.$router.history.current.path !== "/list") {
        this.$router.push("/list");
      }
    },
    handleClose(key, keyPath) {
      if (this.$router.history.current.path !== "/submit") {
        this.$router.push("/submit");
      }
    }
  }
};
</script>
