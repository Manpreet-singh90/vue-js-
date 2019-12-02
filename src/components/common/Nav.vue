<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    ></el-menu>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/dashboard">Dashboard</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/register">Register</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/filter">Pagination</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/datatable">Datatable</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/addProduct">Add Product</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/vuexaddproduct">Vuex Add Product</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/vuexproducts">Vuex Display Product</router-link>
      </el-menu-item>
      <el-menu-item index="3" disabled>Info</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {}
};
</script>

<style scoped></style>
