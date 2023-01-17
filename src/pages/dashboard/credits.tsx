import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import UserLayout from "../../components/layouts/show/user";
import { userShowQuery } from "../../paths/users/[id]";
import type { UserLayoutProps } from "../../components/layouts/show/user";
import type { NextPage } from "next";
import "react-credit-cards/es/styles-compiled.css";
import CreditStripeForm from "../../components/elements/form/stripe/credit";

const SettingsUser: NextPage = () => {
  const query = userShowQuery(useSession().data),
    { data } = trpc.user.findUniqueUser.useQuery(query);
  if (!data) return <></>;
  const userData = data as UserLayoutProps["data"];

  return (
    <UserLayout data={userData} activeTab="">
      <CreditStripeForm />
    </UserLayout>
  );
};

export default SettingsUser;
