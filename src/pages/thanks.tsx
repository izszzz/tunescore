import type { GetServerSideProps, NextPage } from "next";

import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { redirectToSignIn } from "../helpers/user";

const Thanks: NextPage = () => {
  return (
    <DefaultSingleColumnLayout contained>
      Order Completed
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};
export default Thanks;
