import superjson from "superjson";
import React, { useEffect } from "react";
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
import { env } from "../../../env/client.mjs";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../../server/routers/_app";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_CLIENT_ID);
const CreditForm = () => {
  const client = createTRPCProxyClient<AppRouter>({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    }),
    createSetupIntent = trpc.stripe.createSetupIntent.useMutation(),
    { data: paymentMethods } = trpc.stripe.paymentMethods.useQuery();
  useEffect(() => {
    return () => {
      (async () => {
        createSetupIntent.data?.client_secret &&
          client.stripe.cancelSetupIntent.mutate(
            createSetupIntent.data.client_secret
          );
      })();
    };
  }, [client.stripe, createSetupIntent.data?.client_secret]);

  if (!paymentMethods) return <>loading</>;
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
      {createSetupIntent.data?.client_secret ? (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: createSetupIntent.data.client_secret,
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
      confirmParams: { return_url: "http://localhost:3000/settings/credit" },
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
