import Box from "@mui/material/Box";
import type { NextPage } from "next";

import ProviderButtons from "../../components/elements/button/providers";

const SignIn: NextPage = () => (
  <Box
    alignItems="center"
    display="flex"
    height="100vh"
    justifyContent="center"
  >
    <ProviderButtons />
  </Box>
);
export default SignIn;
