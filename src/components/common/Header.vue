<template>
  <div>
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <el-row>
      <el-col :span="3">
        <div class="grid-content">
          <router-link to="/">
            <el-image style="width: 70px; height: 60px" :src="url" class="logo"></el-image>
          </router-link>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="grid-content">
          <el-row>
            <el-col :span="21">
              <el-input size="small" placeholder="search here" v-model="search"></el-input>
            </el-col>
            <el-col :span="3">
              <el-button icon="el-icon-search" circle @click="searchHere"></el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <el-button type="primary" @click="loginForm = true">Login</el-button>
          <el-button type="primary" @click="registerForm = true">Register</el-button>
          <el-dialog title="Login Form" :visible.sync="loginForm" width="30%" center>
            <Login @sendToParent="receiveMessage" />
          </el-dialog>
          <el-dialog title="Register Form" :visible.sync="registerForm" width="50%" center>
            <Register />
          </el-dialog>
          <div class="demo-image__preview"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";

import axios from "axios";

export default {
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.topBar();
      }
    }
  },
  mounted() {
    this.topBar();
  },
  components: {
    Login,
    Register
  },
  data() {
    return {
      search: "",
      loginForm: false,
      registerForm: false,
      url: require("./../../assets/images/logo.png"),
      dialogVisible: false
    };
  },
  methods: {
    topBar() {
      this.$refs.topProgress.start();
      setTimeout(() => {
        this.$refs.topProgress.done();
      }, 200);
    },
    searchHere() {
      this.$router
        .replace({
          path: "/search",
          query: { data: this.search }
        })
        .catch(err => {
          console.log(err);
        });
      // axios
      //   .post("http://testapi.test/api/searchProduct", { search: this.search })
      //   .then(function(response) {
      //     app.$router.push({
      //       path: "/search",
      //       query: { data: response.data }
      //     });
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    receiveMessage(arg1) {
      this.loginForm = false;
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
.demo-input-label {
  display: inline-block;
  width: 130px;
  font-size: 25px;
}
.el-image__inner {
  padding: 0%;
  margin-left: 0%;
}
.slide {
  height: 20%;
  width: 100%;
}
.search {
  height: 45px !important;
}
</style>
