import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import MusicsTable from "../components/Tables/Musics"
import GonContextProvider, { GonContext } from '../contexts/GonContext';

export default function Musics() {
  return (
    <GonContextProvider>
      <GonContext.Consumer>
        {gon =>
          <SingleColumn
            header={<Header />}
            content={<MusicsTable musics={gon?.musics || []} />}
          />
        }
      </GonContext.Consumer>
    </GonContextProvider>
  );
}