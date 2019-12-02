<template>
  <el-row>
    <el-col :span="5">
      <SideBar />
    </el-col>
    <el-col :span="19">
      <div class="grid-content bg-purple-light">
        <span class="heading">Inactive Products</span>
        <el-table
          :data="
            tableData.filter(
              data =>
                !search ||
                data.name.toLowerCase().includes(search.toLowerCase())
            )
          "
          style="width: 100%"
        >
          <el-table-column label="Name" prop="name"></el-table-column>
          <el-table-column label="Price" prop="price"></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"
              />
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import SideBar from "./../common/SideBar";
import axios from "axios";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      productDisplay: "",
      productDisplay: "",
      tableData: [
        {
          name: "2016-05-03",
          price: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "2016-05-02",
          price: "John",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "2016-05-04",
          price: "Morgan",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "2016-05-01",
          price: "Jessy",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      search: ""
    };
  },
  mounted() {
    let app = this;
    axios
      .get("http://testapi.test/api/productList/")
      .then(function(response) {
        app.productDisplay = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped></style>
