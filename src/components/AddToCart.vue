<template>
  <div class="AddToCart" align="left">
      <button class="btn btn-primary" id="move" @click="view">View</button>
    <button  class="btn btn-primary" @click="addToCart"> Add to Cart </button>
  </div>
</template>

<script>
import description from './Description';

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
      $('#miniCart').modal('show');
      this.$store.commit('addToCart', this.item)
    },

    view(){
      $('#description').modal('show');
    }

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
