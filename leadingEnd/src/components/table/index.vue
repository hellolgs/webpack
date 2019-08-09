<template>
<div>
<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="开课时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.startDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="批次"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>课程: {{ scope.row.label }}</p>
          <p>地址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.batch }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="课程"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>课程: {{ scope.row.label }}</p>
          <p>地址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.label }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="校区"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>课程: {{ scope.row.label }}</p>
          <p>地址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.address }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>课程: {{ scope.row.label }}</p>
          <p>地址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.status }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
  
  
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      tableData: [],
      dataArr: "",
      dataTitle: ["日期", "课程", "开课时间", "批次", "校区", "状态"]
    };
  },
  created() {
    this.$axios.post("/list")
      .then(res => {
        this.dataArr = res.data.list;
        this.dataArr.forEach(item => {
          this.tableData.push(item);
        });
      });
  },
  methods: {
    handleEdit(index, row) {
      let obj = {
        id: row.id
      };
      this.$router.push({
          path:'/submit',
          query:{id:row.id}
      })
    },
    handleDelete(index, row) {
      let obj = {
        id: row.id
      };
      this.$axios.post("/loging/delet", obj);
      this.$axios.post("/list")
        .then(res => {

          this.tableData = [];
          this.dataArr = res.data.data.list;
          this.dataArr.forEach(item => {
            this.tableData.push(item);
          });
        });
    }
  }
};
</script>