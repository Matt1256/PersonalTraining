import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Users from "./views/Users.vue";
import Products from "./views/Products.vue";
import Orders from "./views/Orders.vue";
import Logout from "./views/Logout.vue";
import Profile from "./views/Profile.vue";
import {fb} from "./firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {requireAuth: true},

      children:[{
        path: "Users",
        name: "Users",
        component: Users
        },

        {
          path: "Profile",
        name: "Profile",
        component: Profile
        },

        {
          path: "Products",
        name: "Products",
        component: Products
        },

        {
          path: "Orders",
        name: "Orders",
        component: Orders
        },

        {
          path: "Logout",
        name: "Logout",
        component: Logout
        }
      ]
      
    },

    {
      path: "/Checkout",
      name: "Checkout",

      component: () =>
        import( "./views/Checkout.vue")
    },

    {
      path: "/about",
      name: "about",

      component: () =>
        import( "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {

  const requireAuth = to.matched.some(x => x.meta.requireAuth)
  const currentUser = fb.auth().currentUser

  if(requireAuth && !currentUser) {

    next('/')

  } else if (requireAuth && currentUser) {

    next()

  } else {

    next()

  }
})

export default router;
