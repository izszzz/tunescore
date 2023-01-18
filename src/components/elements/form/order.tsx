import Cards from "react-credit-cards";
import { FormContainer, RadioButtonGroup } from "react-hook-form-mui";

import { trpc } from "../../../utils/trpc";
import OrderLoadingButton from "../button/loading/order";
import MusicLists from "../list/music";

const OrderForm = () => {
  const { data: paymentMethods } = trpc.stripe.paymentMethods.useQuery(),
    { data } = trpc.currentUser.findManyCart.useQuery(),
    createPaymentIntent = trpc.stripe.createPaymentIntent.useMutation();
  if (!data || !paymentMethods) return <></>;
  return (
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
      <OrderLoadingButton
        type="submit"
        variant="contained"
        loading={createPaymentIntent.isLoading}
        disableElevation
        fullWidth
      />
    </FormContainer>
  );
};
export default OrderForm;