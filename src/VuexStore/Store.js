import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    ruleForm: {
      name: "",
      price: "",
      quantity: "",
      fileList: [],
      id: "",
      description: "",
      image: ""
    },
    productList: [],
    tableData: [
      {
        name: "",
        description: "",
        price: "",
        address: "",
        id: ""
      }
    ],
    test: "dfsd"
  },
  actions: {
    submitForm(formName) {
      axios
        .post("http://testapi.test/api/addproduct", this.state.ruleForm)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getAllProducts({ commit }) {
      let app = this;
      axios
        .post("http://testapi.test/api/productList/", { status: 2 })
        .then(function(response) {
          commit("getProducts", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mutations: {
    getProducts(state, data) {
      state.tableData = data;
    }
  }
  // getters: {
  //   // Here we will create a getter
  // },

  // mutations: {
  //   // Here we will create Jenny
  // },
});
