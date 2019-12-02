<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content slide">
          <el-image style="width: 100%; height: 400px" :src="slideImage" class="logo"></el-image>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="container">
      <el-col :span="24">
        <div class="grid-content">
          <el-row>
            <el-col
              :span="8"
              class="grid-content product"
              v-for="(product, index) in productDisplay"
              :key="index"
            >
              <el-button type="primary" class="fav">
                <i class="el-icon-collection-tag"></i>
              </el-button>
              <div class="grid-content">
                <el-image style="width: 200px; height: 100px" :src="url" class="logo"></el-image>
              </div>

              <div class="grid-content">
                <span class="demo-input-label">price: ${{ product.price }}</span>
              </div>

              <div class="grid-content">
                <span class="demo-input-label">Product Name: {{ product.name }}</span>
              </div>

              <div class="grid-content">
                <span class="demo-input-label">Product Description: {{ product.description }}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url: require("./../../assets/images/product.jpg"),
      slideImage: require("./../../assets/images/slider.jpg"),
      productDisplay: ""
    };
  },
  mounted() {
    let app = this;
    var value = 11;
    axios
      .post("http://testapi.test/api/productList/", { status: value })
      .then(function(response) {
        app.productDisplay = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
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
.fav {
  margin-left: 200px;
  margin-top: 20px;
  size: 10px;
  padding: 5px;
}
</style>
