<template>
  <div>
    <!-- <span class="demo-input-label">Login Form</span> -->
    <el-form :label-position="labelPosition" label-width="100px">
      <el-form-item label="Email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input placeholder="Please input password" v-model="formData.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import Login from "./Login";

export default {
  components: {
    Login
  },
  data() {
    return {
      labelPosition: "left",
      dialogVisible: false,
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      let app = this;
      axios
        .post("http://testapi.test/api/login", this.formData)
        .then(function(response) {
          if (response.status == 200) {
            app.sendResponseToParents();
            localStorage.setItem("token", response.data.original.api_token);

            app.$router.push("/dashboard");

            // app.$session.start();
            // app.$session.set("token", response.data.original.api_token);
            // if (app.$session.exists("token")) {
            //   app.$router.push("/dashboard");
            // }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    sendResponseToParents() {
      this.$emit("sendToParent", "success");
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
    // searchHere() {
    //   axios
    //     .post("http://testapi.test/api/searchProduct", { search: this.search })
    //     .then(function(response) {
    //       localStorage.setItem("token", response.data.original.api_token);
    //       app.$router.push("/dashboard");
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
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
</style>
