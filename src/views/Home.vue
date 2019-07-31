<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Hero,
    Login
  }
};
</script>

<style>

</style>

