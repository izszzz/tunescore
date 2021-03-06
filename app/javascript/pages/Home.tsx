import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';

export default function Home() {
  return (
    <SingleColumn
      header={<Header />}
      content={
        <>
          <a href="/musics">Musics</a>
          <a href="/artists">Artists</a>
          <a href="/bands">Bands</a>
          <a href="/albums">Albums</a>
        </>
      }
    />
  );
}
