import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import MusicsTable from "../components/Tables/Musics"

export default function Musics() {
  return (
    <SingleColumn 
      header={<Header />} 
      content={<MusicsTable musics={window.gon.musics || []} />} 
    />
  );
}