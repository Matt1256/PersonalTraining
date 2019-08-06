<template>
  <div class="Checkout">
       <Navbar></Navbar>

        <div class="container mt-5 pt-5">

            <div class="row">

                <div class="col-md-8">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="item in this.$store.state.cart" class="media">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}

                                <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>

                            </h5>
                            <p class="mt-0">{{item.productPrice | currency}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>

                    </ul>
                </div>
                <div class="col-md-4">
                    <p>
                        Total Price : {{ this.$store.getters.totalPrice | currency }}
                    </p>

                   

                    <card class='stripe-card'
                        :class='{ complete }'
                        stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
                        :options='stripeOptions'
                        @change='complete = $event.complete'
                        />

                        <button class='pay-with-stripe btn btn-primary mt-4' @click='pay' :disabled='!complete'>Checkout</button>
                    
                    </form>
                </div>
            </div>

        </div>
  </div>
</template>

<script>

var stripe = Stripe('pk_test_M5ETDNck8Bw3yE0bJaWsivjM00KIeq1eqU');
import axios from 'axios';


import { Card, createToken } from 'vue-stripe-elements-plus';


export default {
    data () {
    return {
      sessionId: '',
      complete: false,
      stripeOptions: {
        
      }
    }
  },

  components: { Card },

  methods: {
    pay () {

            stripe.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: this.sessionId.id
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });

      createToken().then(data => console.log(data.token))
    }
  },

  created(){
    axios.post('')
    .then(response => {

      this.sessionId = response.data

    })
    .catch(error => {
      alert("error");
    });
  }
}
</script>



<style>

.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

</style>

