import React, { useContext } from 'react';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import MusicsTable from "../../components/Tables/Musics"
import { GonContext } from '../../contexts/Gon';

export default function Musics() {
  const gon = useContext(GonContext)
  return (
    <SingleColumn
      header={<Header />}
      content={<MusicsTable musics={gon?.musics || []} />}
    />
  );
}