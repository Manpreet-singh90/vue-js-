<template>
  <div>
    <el-row :gutter="20" class="container">
      <el-col :span="24">
        <div class="grid-content">
          <el-row>
            <el-col
              :span="8"
              v-for="(product,index) in products"
              :key="index"
              class="grid-content product"
            >
              <div class="grid-content">
                <el-image
                  style="width: 200px; height: 100px"
                  :src="getPic(product.image)"
                  class="logo"
                  @click="showProduct(product)"
                ></el-image>
              </div>
              <div class="grid-content">
                <span class="demo-input-label">price: ${{product.price}}</span>
              </div>

              <div class="grid-content">
                <span class="demo-input-label">Product Name: {{product.name}}</span>
              </div>

              <div class="grid-content">
                <span class="demo-input-label">Product Description: {{product.description}}</span>
              </div>
            </el-col>
          </el-row>
          <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
            <SingleProduct :productInfo="toDisplayProduct" />
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <!-- modal-->
  </div>
</template>

<script>
import axios from "axios";
import SingleProduct from "./SingleProduct";

export default {
  watch: {
    $route(to, from) {
      if (from.name == to.name) {
        this.productList();
      }
    }
  },
  mounted() {
    this.productList();
  },
  components: {
    SingleProduct
  },
  data() {
    return {
      domain: "http://localhost/lara-vue/public/images/1574405634.jpg",
      url: require("./../../assets/images/logo.png"),
      products: "dfd",
      productData: "",
      centerDialogVisible: false,
      toDisplayProduct: ""
    };
  },
  methods: {
    getPic(image) {
      return "http://localhost/lara-vue/public/images/" + image;
    },
    productList() {
      let app = this;
      let param = this.$route.query.data;

      axios
        .post("http://testapi.test/api/searchProduct", { search: param })
        .then(function(response) {
          app.products = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    showProduct(product) {
      this.centerDialogVisible = true;
      this.toDisplayProduct = product;
    }
  }
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