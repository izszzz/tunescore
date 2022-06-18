import React from 'react';
import Header from '../components/Header';
import SingleColumn from '../templates/SingleColumn';

export default function Home() {
  return (
    <SingleColumn header={<Header />} content={<a href="/musics">Musics</a>} />
  );
}
