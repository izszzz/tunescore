import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export interface SingleColumnLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  contained?: boolean;
}
const SingleColumnLayout: React.FC<SingleColumnLayoutProps> = ({
  header,
  footer,
  children,
  contained,
}) => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    {header}
    {contained ? <Container>{children}</Container> : children}
    {footer}
  </Box>
);

export default SingleColumnLayout;
