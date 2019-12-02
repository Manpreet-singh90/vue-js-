<template>
  <div>
    <el-row>
      <el-col :span="24" class="grid-content product">
        <div class="grid-content">
          <el-image style="width: 200px; height: 100px" :src="url" class="logo"></el-image>
        </div>

        <div class="grid-content">
          <span class="demo-input-label">price: ${{productInfo.price}}</span>
        </div>

        <div class="grid-content">
          <span class="demo-input-label">Product Name:{{productInfo.name}}</span>
        </div>

        <div class="grid-content">
          <span class="demo-input-label">Product Description:{{productInfo.description}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: require("./../../assets/images/logo.png"),
      centerDialogVisible: false
    };
  },
  props: ["productInfo"]
};
</script>

<style scoped >
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.container {
  margin-top: 10px;
}
.product {
}
</style>