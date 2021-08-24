const Stripe = require('stripe');

const PUBLISHABLE_KEY = process.env.Stripe_PK;
const SECRET_KEY = process.env.Stripe_SK;

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: '2020-08-27' });

const createPayment = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2999, //lowest denomination of particular currency
      currency: 'gbp',
      payment_method_types: ['card'] //by default
    });
    const clientSecret = paymentIntent.client_secret;
    res.json({
      clientSecret: clientSecret
    });
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

module.exports = { createPayment };
