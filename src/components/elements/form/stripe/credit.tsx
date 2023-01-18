import React, { useEffect } from "react";
import Cards from "react-credit-cards";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import { env } from "../../../../env/client.mjs";
import type { AppRouter } from "../../../../server/routers/_app";
import { trpc } from "../../../../utils/trpc";

import PaymentStripeForm from "./payment";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_CLIENT_ID);
const CreditStripeForm = () => {
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
          <PaymentStripeForm />
        </Elements>
      ) : (
        <Button onClick={() => createSetupIntent.mutate()}>Add</Button>
      )}
    </Box>
  );
};

export default CreditStripeForm;