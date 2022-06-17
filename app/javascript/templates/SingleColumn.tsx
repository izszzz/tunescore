import React from 'react';

interface Props {
  header: React.ReactNode;
}

export default function SingleColumn({ header }: Props) {
  return (
    <>
      {header}
    </>
  );
}
