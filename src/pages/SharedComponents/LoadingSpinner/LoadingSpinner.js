import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <section className='loading__spinner'>
      <div class='loading__spinner__container'>
        <div class='loading__spinner__content'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
