import type { NextPage } from "next";

import CreditStripeForm from "../../components/elements/form/stripe/credit";
import DashboardLayout from "../../components/layouts/dashboard";

const Credis: NextPage = () => {
  return (
    <DashboardLayout active="credits">
      <CreditStripeForm />
    </DashboardLayout>
  );
};

export default Credis;
