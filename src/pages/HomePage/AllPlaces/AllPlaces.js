import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import PlaceCard from '../PlaceCard/PlaceCard';
import './AllPlaces.css';

const AllPlaces = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get('https://dreamy-travel.herokuapp.com/top-places')
      .then((res) => setPlaces(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <section className='places__section container'>
      <h3>TOP PLACES OF US</h3>
      <p>
        We are offering low cost tour tickets. Because of you enjoy the tour
      </p>
      {places.length ? (
        <div className='place__container'>
          {
            // map all places
            places.map((place) => (
              <PlaceCard key={place._id} place={place} />
            ))
          }
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default AllPlaces;
