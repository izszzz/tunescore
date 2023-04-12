import type { PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export interface SingleColumnLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  contained?: boolean;
}
const SingleColumnLayout = ({
  header,
  footer,
  children,
  contained,
}: PropsWithChildren<SingleColumnLayoutProps>) => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    {header}
    {contained ? <Container>{children}</Container> : children}
    {footer}
  </Box>
);

export default SingleColumnLayout;
