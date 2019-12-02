<template>
  <div>
    <el-row>
      <el-col :span="5">
        <SideBar />
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light">
          <AllProducts />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//import Session from "./../common/mixins/Session";
import AllProducts from "./AllProducts";
import SideBar from "./../common/SideBar";

export default {
  // //mixins: [Session],
  // methods: {
  //   checkSession() {
  //     this.checkSessionValue();
  //   }
  // },
  // mounted: function() {
  //   this.checkSession();
  // }
  components: {
    AllProducts,
    SideBar
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    addProductComp() {
      this.show = false;
    },
    hideComp() {
      this.show = true;
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
