import Container from "@mui/material/Container";

export interface SingleColumnLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  contained?: boolean;
}
const SingleColumnLayout: React.FC<SingleColumnLayoutProps> = ({
  header,
  children,
  contained,
}) => {
  return (
    <>
      {header}
      {contained ? <Container>{children}</Container> : children}
    </>
  );
};

export default SingleColumnLayout;
