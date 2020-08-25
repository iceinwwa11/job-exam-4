<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/layout1/Navbar.vue";
import Body from "@/components/layout1/Body.vue";
import Footer from "@/components/layout1/Footer.vue";
import Sidebar from "@/components/layout1/Sidebar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Body,
    Footer,
    Sidebar,
  },
};
</script>

<style></style>
