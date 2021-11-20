import React, { useEffect } from 'react';
import Header from '../../SharedComponents/Header/Header';
import AllPlaces from '../AllPlaces/AllPlaces';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HollyDayOffer from '../HollyDayOffer/HollyDayOffer';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Dreamy Travel';
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <AllPlaces />
      <HollyDayOffer />
      <Gallery />
    </>
  );
};

export default Home;
