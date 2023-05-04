import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { NextPage } from "next";

import ProviderButtons from "../../components/elements/button/providers";
import SingleColumnLayout from "../../components/layouts/single_column";

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
