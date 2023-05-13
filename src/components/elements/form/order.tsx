import { FormContainer, RadioButtonGroup } from "react-hook-form-mui";

import router from "next/router";

import { trpc } from "../../../utils/trpc";
import OrderLoadingButton from "../button/loading/order";
import CreditCard from "../card/credit";
import ResourceLists from "../list/resource";

const OrderForm = () => {
  const { data: paymentMethods } = trpc.stripe.paymentMethods.useQuery(),
    { data } = trpc.currentUser.findManyCart.useQuery(),
    createPaymentIntent = trpc.stripe.createPaymentIntent.useMutation({
      onSuccess: () => router.push("/thanks"),
    });
  if (!data || !paymentMethods) return null;
  return (
    <FormContainer onSuccess={({ id }) => createPaymentIntent.mutate(id)}>
      <RadioButtonGroup
        label="Payment Methods"
        name="id"
        options={paymentMethods.map((paymentMethod) => ({
          id: paymentMethod.id,
          label: <CreditCard data={paymentMethod} />,
        }))}
      />
      <ResourceLists
        data={data.map(({ resource, ...music }) => ({ ...resource, music }))}
      />
      {data.reduce((sum, data) => sum + (data.price || 0), 0)}
      <OrderLoadingButton
        disableElevation
        fullWidth
        loading={createPaymentIntent.isLoading}
        type="submit"
        variant="contained"
      />
    </FormContainer>
  );
};
export default OrderForm;
