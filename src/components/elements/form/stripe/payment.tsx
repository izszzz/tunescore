import Button from "@mui/material/Button";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
const PaymentStripeForm = () => {
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

export default PaymentStripeForm;
