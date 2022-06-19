import React from 'react';
import Container from '@mui/material/Container';

interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

export default function SingleColumn({ header, content }: Props) {
  return (
    <>
      {header}
      <Container>
        {content}
      </Container>
    </>
  );
}
