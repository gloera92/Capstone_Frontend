import React from "react";
import StripeCheckout from 'react-stripe-checkout';


    function Checkout () {
    const [product] = React.useState({
    name: "Puppy",
    price: 60,
    description: "Puppers"
  });

  function handleToken(token, addresses) {
    console.log({ token, addresses})
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>Total · ${product.price}</h3>
      </div>
      <StripeCheckout
      stripeKey="pk_test_51J0VHFAkdKvhA7T3Kaf9eQnOZgkvkiA0X2XX4T84Mz8MMLcutnt6UCCwxRMhwC8TJ4euGj1dJPCDDPPstbKD3PZq001KWCZDaC"
        token={handleToken}
/>
    </div>
  );
}

export default Checkout;



