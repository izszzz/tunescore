import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import GonContextProvider from '../contexts/GonContext';

export default function Home() {
  return (
    <GonContextProvider>
      <SingleColumn
        header={<Header />}
        content={<a href="/musics">Musics</a>}
      />
    </GonContextProvider>
  );
}
