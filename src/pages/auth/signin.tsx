import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { GetServerSideProps, NextPage } from "next";

import ProviderButtons from "../../components/elements/button/providers";
import SingleColumnLayout from "../../components/layouts/single_column";
import { redirectToSignIn } from "../../helpers/user";

const SignIn: NextPage = () => {
  return (
    <SingleColumnLayout contained>
      <Box my={3}>
        <Card variant="outlined">
          <CardContent>
            <ProviderButtons />
          </CardContent>
        </Card>
      </Box>
    </SingleColumnLayout>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = (await redirectToSignIn(ctx)) || {
    permanent: true,
    destination: "/",
  };
  return {
    props: {},
    redirect,
  };
};
