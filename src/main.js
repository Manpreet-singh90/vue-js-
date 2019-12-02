// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSession from "vue-session";
import store from "./VuexStore/Store";

// import { VueReCaptcha } from "vue-recaptcha-v3";

// Vue.use(VueReCaptcha, { siteKey: "6Ld-3cMUAAAAAKuDeU2TUc1-ShJD9C16YGy16Oza" });
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);
import Datatable from "vue2-datatable-component";
Vue.use(Datatable); // done!

import vueTopprogress from "vue-top-progress";

Vue.use(vueTopprogress);

Vue.use(VueSession);
Vue.use(VueAxios, axios);
Vue.use(Element);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const session = window.localStorage.getItem("token");
    if (session == null) {
      next("/");
    } else if (to.meta.truckerAuth) {
      const session = window.localStorage.getItem("token");
      console.log(session);
      if (session) {
        next("/dashboard");
      } else {
        next("/");
      }
    }
    // else if (to.meta.dispatchAuth) {
    //   const employeeId = window.localStorage.getItem("employee_id");
    //   if (employeeId === 2) {
    //     next();
    //   } else {
    //     next("/");
    //   }
    // }
  } else {
    next();
  }
});
