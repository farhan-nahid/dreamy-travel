import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import deleteIcon from '../../../assets/images/icon/delete.png';
import editIcon from '../../../assets/images/icon/edit2.png';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import './ManagePlace.css';

const ManagePlace = () => {
  const [allPlace, setAllPlaces] = useState([]);

  useEffect(() => {
    axios
      .get('https://dreamy-travel.herokuapp.com/top-places')
      .then((res) => setAllPlaces(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  const handleDeletePlace = () => {
    Swal.fire(
      'This Feature is under Construction.',
      'We will implement it soon'
    );
  };

  const handleUpdatePlace = () => {
    Swal.fire(
      'This Feature is under Construction.',
      'We will implement it soon'
    );
  };

  return (
    <section className='place__manage'>
      <h3>Manage Place</h3>
      <div className='place__manage__places'>
        <div className='place__manage__content'>
          <div className='place__row'>
            <div className='place__col'>
              <h2>Place Name</h2>
            </div>
            <div className='place__col'>
              <h2>Price</h2>
            </div>
            <div className='place__col'>
              <h2>Action</h2>
            </div>
          </div>
          {allPlace.length ? (
            <>
              {allPlace.map((place) => (
                <div className='place__row' key={place._id}>
                  <div className='place__col'>
                    <h4>{place.name}</h4>
                  </div>
                  <div className='place__col'>
                    <h4 className='text__center'>${place.price}</h4>
                  </div>
                  <div className='place__col align__items'>
                    <span
                      className='placeAction__btn me-2'
                      onClick={handleUpdatePlace}
                    >
                      <img src={editIcon} alt='editIcon' />
                    </span>
                    <span
                      className='placeAction__btn'
                      onClick={handleDeletePlace}
                    >
                      <img src={deleteIcon} alt='deleteIcon' />
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </section>
  );
};

export default ManagePlace;
