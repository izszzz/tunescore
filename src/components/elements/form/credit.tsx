import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import Grid from "@mui/material/Grid";
import {
  PaymentElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { trpc } from "../../../utils/trpc";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const stripePromise = loadStripe(
  "pk_test_51MQ3NwKLCyNljcxK2UkH4wUKABfXVEmAZS74yLjqQuDj0i18321OExA0dzkb7RxJ11x9E4Dm1t7BUjSlMsEULJ2N003Xj5fwLx"
);
const CreditForm = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null),
    createSetupIntent = trpc.stripe.createSetupIntent.useMutation({
      onSuccess: (data) => setClientSecret(data.client_secret),
    }),
    { data: setupIntents } = trpc.stripe.setupIntents.useQuery(),
    { data: paymentMethods } = trpc.stripe.paymentMethods.useQuery();

  useEffect(() => {
    setupIntents &&
      setupIntents[0] &&
      setClientSecret(setupIntents[0].client_secret);
  }, [setupIntents]);

  if (!setupIntents || !paymentMethods) return <>loading</>;
  return (
    <Box my={3}>
      <Grid container my={3} spacing={3}>
        {paymentMethods.map((paymentMethod) => (
          <Grid key={paymentMethod.id} item xs={6}>
            <Cards
              name={""}
              number={`**** **** **** ${paymentMethod.card?.last4}`}
              cvc={0}
              expiry={`${paymentMethod.card?.exp_month}${paymentMethod.card?.exp_year}`}
              preview
              issuer={paymentMethod.card?.brand.toLowerCase()}
            />
          </Grid>
        ))}
      </Grid>
      {clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
          }}
        >
          <CheckoutForm />
        </Elements>
      ) : (
        <Button onClick={() => createSetupIntent.mutate()}>Add</Button>
      )}
    </Box>
  );
};

const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmSetup({
      elements,
      confirmParams: { return_url: "http://localhost:3000" },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </form>
  );
};
export default CreditForm;
