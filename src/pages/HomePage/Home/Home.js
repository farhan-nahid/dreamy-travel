import React from 'react';
import AllPlaces from '../AllPlaces/AllPlaces';
import Banner from '../Banner/Banner';
import Header from '../../SharedComponents/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <AllPlaces />
    </>
  );
};

export default Home;
