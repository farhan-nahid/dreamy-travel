import React from 'react';
import { Link } from 'react-router-dom';
import './HollyDayOffer.css';

const HollyDayOffer = () => {
  return (
    <section className='holly__day'>
      <div className='container'>
        <h5>HOLIDAY PACKAGE OFFER</h5>
        <h2>HOLIDAY SPECIAL 25% OFF !</h2>
        <p>
          Sign up now to receive hot special offers and information about the
          best tour packages, updates and discounts !!
        </p>
        <input
          type='email'
          placeholder='Enter Your Email'
          className='form-control w-50 d-inline-block'
        />
        <Link to='/login' className='main__button'>
          Sign In now
        </Link>
      </div>
    </section>
  );
};

export default HollyDayOffer;
