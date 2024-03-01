// index.tsx
import React from 'react';
import Header from '../components/Header'; 
import Bio from '../components/Bio';
import Vedoc from '../components/Vedoc';
import TaxiWay from '../components/TaxiWay';
import Estility from '../components/Estility';
import RandomProjectOne from '../components/RPOne';
import RandomProjectTwo from '../components/RPTwo';


const IndexPage: React.FC = () => {
  
  return (
    <div className="container">
      <Header />
      <Bio />
      <Vedoc />
      <TaxiWay />
      <Estility />
      <RandomProjectOne />
      <RandomProjectTwo />
    </div>
  );
};

export default IndexPage;