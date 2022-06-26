import React from 'react';
import Container from '@mui/material/Container';
import SpeedDial from "../components/SpeedDial";

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
      <SpeedDial />
    </>
  );
}
