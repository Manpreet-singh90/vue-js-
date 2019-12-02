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
        <vue-recaptcha
          sitekey="6LcR4MMUAAAAAGRFXfYg_rpMOBL75NjsvwHkUxeT"
          @verify="markRecaptchaAsVerified"
        ></vue-recaptcha>
        <el-button type="primary" @click="submit">Create</el-button>
        <el-button>Cancel</el-button>
        <div>
          <strong>{{ loginForm.pleaseTickRecaptchaMessage }}</strong>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import VueRecaptcha from "vue-recaptcha";

export default {
  components: { VueRecaptcha },
  data() {
    return {
      labelPosition: "left",
      dialogVisible: false,
      loginForm: {
        recaptchaVerified: false,
        pleaseTickRecaptchaMessage: ""
      },
      recaptchaVerified: false,
      pleaseTickRecaptchaMessage: "",
      formData: {
        email: "",
        password: "",
        id: ""
      }
    };
  },
  methods: {
    markRecaptchaAsVerified(response) {
      this.loginForm.pleaseTickRecaptchaMessage = "";
      this.loginForm.recaptchaVerified = true;
    },
    checkIfRecaptchaVerified() {
      if (!this.loginForm.recaptchaVerified) {
        this.loginForm.pleaseTickRecaptchaMessage = "Please tick recaptcha.";
        return true; // prevent form from submitting
      }
      alert("form would be posted!");
    },
    submit() {
      let app = this;
      if (!this.loginForm.recaptchaVerified) {
        this.loginForm.pleaseTickRecaptchaMessage = "Please tick recaptcha.";
        return true; // prevent form from submitting
      }
      axios
        .post("http://testapi.test/api/register", this.formData)
        .then(function(response) {
          console.log(response);
          //app.$router.push("/dashboard");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
    );
    document.head.appendChild(recaptchaScript);
  }
};
</script>

<style scoped></style>
