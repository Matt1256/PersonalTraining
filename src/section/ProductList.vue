<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              
              <div class="col-md-4" v-for="product in products">
                  <div class="card product-item">

                        <carousel :perPage="1">
                          <slide v-for="(image, index) in product.images">
                                <img :src="image" class="card-img-top" alt="..." width="250px">
                          </slide>
                        </carousel>
                
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">R{{ product.price }}</h5>
                            
                          </div><br>
                            <div align="left">
                               <h5 class="card-priceS">{{ product.description }}</h5>
                              </div>
                            <AddToCart 
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name"
                                @click="log">
                            </AddToCart>       
                                
                        </div>
                    </div>
              </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import {db} from '../firebase';
import AddToCart from '../components/AddToCart';
import description from '../components/Description';

export default {
  name: "ProductsList",
  components: {
      AddToCart,
      description,
  },
  props: {
    msg: String
  },

data(){
    return {
        products: [],
     
    }
  },

  methods:{

    getImage(images){
      return images[0];
    },

  },

  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: gray;
        padding-bottom: 3rem;
    }
</style>
