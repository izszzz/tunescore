import type { NextPage } from "next";

import CreditStripeForm from "../../components/elements/form/stripe/credit";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";

const Credis: NextPage = () => {
  return (
    <DefaultSingleColumnLayout contained>
      <CreditStripeForm />
    </DefaultSingleColumnLayout>
  );
};

export default Credis;
