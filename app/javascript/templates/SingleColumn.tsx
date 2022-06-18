import React from 'react';

interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

export default function SingleColumn({ header, content }: Props) {
  return (
    <>
      {header}
      {content}
    </>
  );
}
