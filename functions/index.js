const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_UwNeBb1ZkCVnONyyTTYBDO4G00BHVieNU7');
const cors = require('cors')({origin: true});

exports.CheckoutSession = functions.https.onRequest((request, response) => {

  cors(request, response, () => {

    stripe.checkout.sessions.create({
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
      payment_method_types: ["card"],
      line_items: [{
        name: "T-shirt",
        description: "Comfortable cotton t-shirt",
        amount: 1500,
        currency: "usd",
        quantity: 2
      }]
    }, function(err, session) {
      response.send(session);
    });
    
  })

});
