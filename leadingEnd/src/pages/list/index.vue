<template>
    <div class="bc-list">
        <div class="top">
            <CommonHeader></CommonHeader>
        </div>  
        <div class="button">
            <Left></Left>  
            <Table></Table>  
        </div>      
    </div>
</template>
<script>
import CommonHeader from "../../components/header/index.vue";
import Left from "../../components/left/index.vue";
import Table from "../../components/table/index.vue";
import "./style.scss";
export default {
  name: "List",
  components: {
    CommonHeader,
    Left,
    Table
  },
  created() {
    this.$axios.post("/loging/sess", {}).then(res => {
      if (!res.username) {
        if (this.$router.history.current.path !== "/loging") {
          this.$router.push("/loging");
        }
      }
    });
  }
};
</script>

