<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
      
      <productsList></productsList>
    

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";
import Products from "@/section/Products.vue";
import ProductsList from "@/section/ProductList.vue";

export default {
  name: "home",
  components: {
    Hero,
    Login, 
    Products,
    ProductsList
  }
};
</script>

<style>

</style>

