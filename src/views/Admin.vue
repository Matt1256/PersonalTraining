<template>
    <div class="admin">
    
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
    
            <nav id="sidebar" class="sidebar-wrapper">
    
                <div class="sidebar-content">
    
    
    
                    <!-- sidebar-header  -->
    
                    <div class="sidebar-item sidebar-header d-flex flex-nowrap">
    
                        <div class="user-pic">
    
                            <img class="img-responsive img-rounded" src="img/user.jpg" alt="User picture">
    
                        </div>
    
                        <div class="user-info">
    
                            <span class="user-name">Jhon
    
                                <strong>Smith</strong>
    
                            </span>
    
                            <span class="user-role">Administrator</span>
    
                            <span class="user-status">
    
                                <i class="fa fa-circle"></i>
    
                                <span>Online</span>
    
                            </span>
    
                        </div>
    
                    </div>
    
                    <!-- sidebar-search  -->
    
                    <div class="sidebar-item sidebar-search">
    
                        <div>
    
                            <div class="input-group">
    
                                <input type="text" class="form-control search-menu" placeholder="Search...">
    
                                <div class="input-group-append">
    
                                    <span class="input-group-text">
    
                                        <i class="fa fa-search" aria-hidden="true"></i>
    
                                    </span>
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                    <!-- sidebar-menu  -->
    
                    <div class=" sidebar-item sidebar-menu">
    
                        <ul>
    
                            <li class="header-menu">
    
                                <span>Menu</span>
    
                            </li>
    
                            <li>
    
                                <router-link to="/admin/Overview">
    
                                    <i class="fa fa-tachometer-alt"></i>
    
                                    <span class="menu-text">Overview</span>
    
                                    
    
                                </router-link>
    
    
    
    
    
                            </li>
    
    
    
                            <li>
    
                                <router-link to="/admin/Products">
    
                                    <i class="fa fa-book"></i>
    
                                    <span class="menu-text">Products</span>
    
                                   
    
                                </router-link>
    
                            </li>
    
                            <li>
    
                                <router-link to="/admin/Orders">
    
                                    <i class="fa fa-calendar"></i>
    
                                    <span class="menu-text">Orders</span>
    
                                </router-link>
    
                            </li>

                            <li>
    
                                <router-link to="/admin/Logout">
    
                                    <i class="fa fa-calendar"></i>
    
                                    <span class="menu-text">Logout</span>
    
                                </router-link>
    
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

export default {
    name: "home",
    components: {
        Hero
    }
};
</script>

<style>

</style>