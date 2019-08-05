<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
      
      <productsList></productsList>

      <MiniCart></MiniCart>
    

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";
import ProductsList from "@/section/ProductList.vue";
import MiniCart from "@/components/MiniCart.vue";

export default {
  name: "home",
  components: {
    Hero,
    Login, 
    ProductsList,
    MiniCart
  }
};
</script>

<style>

</style>

