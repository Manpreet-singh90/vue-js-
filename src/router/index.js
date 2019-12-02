import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Dashboard from "@/components/ui/Dashboard";
import Register from "@/components/common/Register";
import Home from "@/components/ui/Home";
import SearchProduct from "@/components/ui/SearchProduct";
import AddProduct from "@/components/ui/AddProduct";
import ActiveProduct from "@/components/ui/ActiveProducts";
import InactiveProduct from "@/components/ui/InactiveProducts";
import Pagination from "@/components/ui/PaginationDemo";
import Filter from "@/components/ui/Pagination";
import Datatable from "@/components/common/DataTable/Datatable";
import Test from "@/components/ui/Test";
import VuexAddProduct from "@/components/ui/Vuex/VuexAddProduct";
import VuexProducts from "@/components/ui/Vuex/VuexProducts";
import Checkbox from "@/components/ui/Checkbox";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
      // meta: {
      //   requiresAuth: true
      // }
      // beforeEnter: (to, from, next) => {
      //   if (!localStorage.getItem("token")) {
      //     next(false);
      //   } else {
      //     next();
      //   }
      // }
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/search",
      name: "SearchProduct",
      component: SearchProduct
    },
    {
      path: "/addProduct",
      name: "AddProduct",
      component: AddProduct
    },
    {
      path: "/activeProduct",
      name: "ActiveProduct",
      component: ActiveProduct
    },
    {
      path: "/inactiveProduct",
      name: "InactiveProduct",
      component: InactiveProduct
    },
    {
      path: "/pagination",
      name: "Pagination",
      component: Pagination
    },
    {
      path: "/filter",
      name: "Filter",
      component: Filter
    },
    {
      path: "/datatable",
      name: "Datatable",
      component: Datatable
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    },
    {
      path: "/vuexaddproduct",
      name: "VuexAddProduct",
      component: VuexAddProduct
    },
    {
      path: "/vuexproducts",
      name: "VuexProducts",
      component: VuexProducts
    },
    {
      path: "/checkbox",
      name: "Checkbox",
      component: Checkbox
    }
  ]
});
