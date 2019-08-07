<template>
    <div class="admin">
    
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
    
            <nav id="sidebar" class="sidebar-wrapper">
    
                <div class="sidebar-content">
    
    
    
                  
                    <!-- sidebar-menu  -->
    
                    <div class=" sidebar-item sidebar-menu">
    
                        <ul>
    
                            <li class="header-menu">
    
                                <span>Menu</span>
    
                            </li>

                              <li>
    
                                <router-link to="/">
    
                                    <i class="fa fa-home"></i>
    
                                    <span class="menu-text">Home</span>
    
                                </router-link>
    
                            </li>
    

                            <li>
    
                                <router-link to="/admin/Profile">
    
                                    <i class="fa fa-user"></i>
    
                                    <span class="menu-text">Profile</span>
    
                                </router-link>
    
                            </li>
    
    
    
                            <li>
    
                                <router-link to="/admin/Products">
    
                                    <i class="fa fa-book"></i>
    
                                    <span class="menu-text">Products</span>
    
                                   
    
                                </router-link>
    
                            </li>
    

                            <li>
                                <a href=# @click="logout()">
    
                                
    
                                    <i class="fa fa-power-off"></i>
    
                                    <span class="menu-text">Logout</span>
                                    </a>
                                
    
                            </li>
    
                        </ul>
    
                    </div>
    
                    <!-- sidebar-menu  -->
    
                </div>
    
    
    
    
    
            </nav>
    
            <!-- page-content  -->
    
            <main class="page-content">
    
                <router-view/>
    
    
    
            </main>
    
            <!-- page-content" -->
    
        </div>
    
    </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import {fb} from '../firebase';

export default {
    name: "admin",
    data(){
        return{
            name: null,
            email: null,
        }
        
    },
    components: {
        Hero
    },
    
methods:{
    logout(){
        fb.auth().signOut()
        .then(() =>{
            this.$router.replace('/');
            location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }
},
created(){
      let user = fb.auth().currentUser;
      this.email = user.email;

  }
};
</script>

<style>

</style>