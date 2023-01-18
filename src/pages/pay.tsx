import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import OrderForm from "../components/elements/form/order";

const Pay: NextPage = () => {
  return (
    <DefaultSingleColumnLayout contained>
      <Typography>Pay</Typography>
      <OrderForm />
    </DefaultSingleColumnLayout>
  );
};

export default Pay;
