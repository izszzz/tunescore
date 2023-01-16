import Cards from "react-credit-cards";
import Typography from "@mui/material/Typography";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";
import MusicLists from "../components/elements/list/music";
import type { NextPage } from "next";
import { FormContainer, RadioButtonGroup } from "react-hook-form-mui";
import LoadingButton from "@mui/lab/LoadingButton";

const Pay: NextPage = () => {
  const { data: paymentMethods } = trpc.stripe.paymentMethods.useQuery(),
    { data } = trpc.currentUser.findManyCart.useQuery(),
    createPaymentIntent = trpc.stripe.createPaymentIntent.useMutation();
  if (!data || !paymentMethods) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Pay</Typography>
      <FormContainer onSuccess={({ id }) => createPaymentIntent.mutate(id)}>
        <RadioButtonGroup
          label="Payment Methods"
          name="id"
          options={paymentMethods.map((paymentMethod) => ({
            id: paymentMethod.id,
            label: (
              <Cards
                name={""}
                number={`**** **** **** ${paymentMethod.card?.last4}`}
                cvc={0}
                expiry={`${paymentMethod.card?.exp_month}${paymentMethod.card?.exp_year}`}
                preview
                issuer={paymentMethod.card?.brand.toLowerCase()}
              />
            ),
          }))}
        />
        <MusicLists data={data} />
        合計: {data.reduce((sum, data) => sum + (data.price || 0), 0)}
        <LoadingButton
          type="submit"
          variant="contained"
          loading={createPaymentIntent.isLoading}
          disableElevation
          fullWidth
        >
          {" "}
          注文する
        </LoadingButton>
      </FormContainer>
    </DefaultSingleColumnLayout>
  );
};

export default Pay;
