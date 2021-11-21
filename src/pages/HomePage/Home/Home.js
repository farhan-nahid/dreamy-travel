import React, { useEffect } from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../../SharedComponents/Header/Header';
import AllPlaces from '../AllPlaces/AllPlaces';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
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
      <Counter />
      <Footer />
    </>
  );
};

export default Home;
