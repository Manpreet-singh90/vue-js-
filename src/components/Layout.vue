<template>
  <div class="layout">
    <Header />
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
import Nav from "./common/Nav";

export default {
  name: "layout",
  components: {
    Header,
    Footer,
    Nav
  }
};
</script>