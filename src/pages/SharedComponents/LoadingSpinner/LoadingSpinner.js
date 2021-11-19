import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <section className='loading__spinner'>
      <div className='loading__spinner__container'>
        <div className='loading__spinner__content'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
