import React, { useEffect } from 'react';
import Header from '../../SharedComponents/Header/Header';
import AllPlaces from '../AllPlaces/AllPlaces';
import Banner from '../Banner/Banner';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Dreamy Travel';
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <AllPlaces />
    </>
  );
};

export default Home;
