import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceCard.css';

const PlaceCard = ({ place: { _id, name, price, description, image } }) => {
  return (
    <div className='place__card'>
      <div className='card__image'>
        <img src={image} alt='name' />
      </div>
      <div className='card__content'>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='card__price__button'>
          <h4>${price}</h4>
          <Link className='main__button' to={`/book/${_id}`}>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
