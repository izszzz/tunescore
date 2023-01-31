import Box from "@mui/material/Box";

import DefaultSingleColumnLayout from "../single_column/default";

interface NewLayoutProps {
  children: React.ReactNode;
}
const NewLayout = ({ children }: NewLayoutProps) => (
  <DefaultSingleColumnLayout contained>
    <Box my={3}>{children}</Box>
  </DefaultSingleColumnLayout>
);

export default NewLayout;
