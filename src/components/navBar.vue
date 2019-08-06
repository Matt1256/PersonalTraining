<template>
  <div class="hello">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Personal training</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" >About</router-link>
      </li>
    
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <a class="btn btn-outline-success my-2 my-sm-0"  @click="log"  data-toggle="modal" data-target="#profile">My profile</a>
      <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#forgotPassword">Forgot Password</a>
      <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Sign up/Login</a>
      <a  style="cursor: pointer" class="fas fa-shopping-cart" data-toggle="modal" data-target="#miniCart">Cart</a>
    </form>
  </div>
  <Login></Login>
  <forgotPassword></forgotPassword>
  <profile></profile>
</nav>

    </div>
</template>

<script>
import Login from './Login.vue';
import MiniCart from './MiniCart';
import forgotPassword from './forgotPassword';
import profile from './profile';
import {fb} from '../firebase';

export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components: {
    Login,
    MiniCart,
    forgotPassword,
    profile,
  },
  methods: {
    log(){
      const currentUser = fb.auth().currentUser

      if(!currentUser){
        alert("You need to be logged in");
        this.modal = 'hide';
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
