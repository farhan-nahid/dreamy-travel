import React from 'react';
import loader from '../../../assets/images/loader.svg';
import './PreLoader.css';

const PreLoader = () => {
  return (
    <section className='pre__loader'>
      <img src={loader} alt='loaderImage' />
    </section>
  );
};

export default PreLoader;
