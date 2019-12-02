<template>
  <div class="grid-content bg-purple">
    <el-row class="tac">
      <el-col :span="24">
        <h5>Side Bar</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-folder-opened"></i>
              <span>Products</span>
            </template>
            <el-menu-item index="1-1" @click="addProduct">Add Products</el-menu-item>
            <el-menu-item index="1-2" @click="activeProducts">Active Products</el-menu-item>
            <el-menu-item index="1-3" @click="inactiveProducts">In-active Products</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleEdit(index, row) {
      //console.log(index, row);
    },
    handleDelete(index, row) {
      //console.log(index, row);
    },
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    addProduct() {
      this.$router.push({ path: "/addProduct" });
    },
    activeProducts() {
      this.$router.push({ path: "/activeProduct" });
    },
    inactiveProducts() {
      this.$router.push({ path: "/inactiveProduct" });
    }
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
.heading {
  font-size: 25px;
}
</style>