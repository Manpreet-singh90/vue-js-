<template>
  <div>
    <span class="heading">All Products</span>
    <el-table
      :data="
        tableData.filter(
          data =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Price" prop="description"></el-table-column>
      <el-table-column label="Price" prop="quantity"></el-table-column>
      <el-table-column label="Price" prop="price"></el-table-column>
      <el-table-column label="Quantity" prop="quantity"></el-table-column>
      <el-table-column label="image" prop="image">
        <template slot-scope="scope">
          <el-image
            style="width: 80px; height: 80px"
            :src="getPic(scope)"
            :preview-src-list="srcList"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            prop="id"
            @click="deleteProduct(scope, scope.$index, tableData)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    status: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      productDisplay: "",
      tableData: [
        {
          name: "",
          description: "",
          price: "",
          address: "",
          id: ""
        }
      ],
      search: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  },
  methods: {
    getPic(products) {
      let image = products.row.image;
      return "http://localhost/lara-vue/public/images/" + image;
    },

    deleteProduct(products, index, rows) {
      let app = this;
      //this.product.id = products.row.id;
      axios
        .post("http://testapi.test/api/deleteProduct", { id: products.row.id })
        .then(function(response) {
          console.log(response.data);
          rows.splice(index, 1);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    let app = this;
    axios
      .post("http://testapi.test/api/productList/", { status: this.status })
      .then(function(response) {
        app.tableData = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped></style>
