<template>
  <div>
    <el-row>
      <el-col :span="5">
        <SideBar />
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light">
          <span>Add Products</span>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="Name" prop="name">
              <el-input
                type="text"
                autocomplete="off"
                v-model="ruleForm.name"
              ></el-input>
            </el-form-item>
            <el-form-item label="Description" prop="description">
              <el-input
                type="text"
                autocomplete="off"
                v-model="ruleForm.description"
              ></el-input>
            </el-form-item>
            <el-form-item label="Price" prop="price">
              <el-input
                type="number"
                autocomplete="off"
                v-model="ruleForm.price"
              ></el-input>
            </el-form-item>
            <el-form-item label="Quantity" prop="quantity">
              <el-input
                type="number"
                autocomplete="off"
                v-model="ruleForm.quantity"
              ></el-input>
            </el-form-item>

            <el-form-item label="Image" prop="image">
              <el-upload
                action="http://testapi.test/api/addproduct"
                :multiple="false"
                :limit="1"
                class="upload-demo"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :file-list="ruleForm.fileList"
                :on-success="handleSucces"
              >
                <el-button size="small" type="primary"
                  >Click to upload</el-button
                >
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >Submit</el-button
              >
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
//import Header from "./../common/Header";
//import Nav from "./../common/Nav";
import SideBar from "./../common/SideBar";
//import Footer from "./../common/Footer";

export default {
  components: {
    SideBar
  },
  data() {
    var checkName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the name"));
      } else {
        if (this.ruleForm.name !== "") {
          this.$refs.ruleForm.validateField("checkName");
        }
        callback();
      }
    };
    var checkDescription = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the name"));
      } else {
        if (this.ruleForm.description !== "") {
          this.$refs.ruleForm.validateField("checkDescription");
        }
        callback();
      }
    };
    var checkPrice = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the price"));
      } else {
        if (this.ruleForm.price !== "") {
          this.$refs.ruleForm.validateField("checkPrice");
        }
        callback();
      }
    };
    var checkQuantity = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the price"));
      } else {
        if (this.ruleForm.quantity !== "") {
          this.$refs.ruleForm.validateField("checkQuantity");
        }
        callback();
      }
    };

    return {
      fileList: [],
      ruleForm: {
        name: "",
        price: "",
        quantity: "",
        fileList: [],
        id: "",
        description: "",
        image: ""
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        description: [{ validator: checkDescription, trigger: "blur" }],
        price: [{ validator: checkPrice, trigger: "blur" }],
        quantity: [{ validator: checkQuantity, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let formData = new FormData();
      formData.append("file", this.fileList[0]);
      console.log(formData);
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://testapi.test/api/addproduct", this.ruleForm)
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSucces(file) {
      this.ruleForm.image = file;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 1, you selected ${
          files.length
        } files this time, add up to ${files.length + fileList.length} totally`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    }
  }
};
</script>

<style scoped></style>
