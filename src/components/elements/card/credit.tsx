import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type Stripe from "stripe";

interface CreditCardProps {
  data: Stripe.PaymentMethod;
}
const CreditCard = ({ data }: CreditCardProps) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h6">{data.card?.brand}</Typography>
      <Typography variant="h5">**** **** **** {data.card?.last4}</Typography>
      {data.card?.exp_month}/{data.card?.exp_year}
    </CardContent>
  </Card>
);

export default CreditCard;
