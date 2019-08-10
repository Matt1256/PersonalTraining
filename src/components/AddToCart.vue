<template>
  <div class="AddToCart" align="left">
    <button  class="btn btn-primary" @click="addToCart"> Add to Cart </button>
  </div>
</template>

<script>
import description from './Description';
import {fb} from '../firebase';

export default {
  name: 'AddToCart',
  components: {
      description
  },
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },

   data(){
      return {
          item :{
            productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
          }

      }
  },

   methods:{
    addToCart(){
      const currentUser = fb.auth().currentUser;
      if(!currentUser){
        Swal.fire({
        title: 'You have to be logged in',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log me in!'

        }).then((result) => {

          if(result.value){
            $('#login').modal('show');
          }

        })
      } else {

      $('#miniCart').modal('show');
      this.$store.commit('addToCart', this.item)
      }
      
    },


  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#move {
  margin-right: 30%;
  margin-left: 5%;
}
</style>
