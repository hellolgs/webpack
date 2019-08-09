<template>
<div>
<el-form ref="form" :model="form" label-width="80px" style=" margin-top: 20px;">
  <el-form-item label="课程">
    <el-input v-model="form.label"></el-input>
  </el-form-item>
  <el-form-item label="批次">
    <el-input v-model="form.batch"></el-input>
  </el-form-item>
  <el-form-item label="开课时间">
    <el-input v-model="form.startDate"></el-input>
  </el-form-item>
  <el-form-item label="校区">
    <el-input v-model="form.address"></el-input>
  </el-form-item>
  <el-form-item label="状态">
    <el-input v-model="form.status"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
    
</template>


<script>
export default {
  data() {
    return {
      form: {
        label: "",
        batch: "",
        startDate: "",
        address: "",
        status: "",
      },
      dataArr: []
    };
  },
  created() {
    let obj = {
      id: this.$route.query
    };
    this.$axios.post("http://127.0.0.1:4000/loging/updeta", obj).then(res => {
      this.form = res.data;
    });
  },
  methods: {
    onSubmit() {
      if (!this.$route.query.id) {
        this.dataArr.push({
          label: this.form.label,
          batch: this.form.batch,
          startDate: this.form.startDate,
          address: this.form.address,
          status: this.form.status
        });
        this.$axios.post(
          "http://127.0.0.1:4000/loging/write",
          this.dataArr
        );
        this.dataArr = [];
        this.$router.push("/list");
      } else {
        this.dataArr.push({
          id: this.$route.query.id,
          label: this.form.label,
          batch: this.form.batch,
          startDate: this.form.startDate,
          address: this.form.address,
          status: this.form.status
        });
        this.$axios.post(
          "http://127.0.0.1:4000/loging/amend",
          this.dataArr
        );
        this.dataArr = [];
        this.$router.push("/list");
      }
    }
  }
};
</script>

