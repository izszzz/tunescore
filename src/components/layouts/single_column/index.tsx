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
}) => {
  return (
    <>
      {header}
      {contained ? (
        <Container>
          {children}
          {footer}
        </Container>
      ) : (
        <>
          {children}
          {footer}
        </>
      )}
    </>
  );
};

export default SingleColumnLayout;
