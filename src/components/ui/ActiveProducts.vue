<template>
  <div>
    <el-row>
      <el-col :span="5">
        <SideBar />
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light">
          <AllProduct :status="active" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideBar from "./../common/SideBar";
import AllProduct from "./AllProducts";
import axios from "axios";

export default {
  data() {
    return {
      active: 1
    };
  },
  components: {
    SideBar,
    AllProduct
  }
};
</script>

<style scoped>
</style>