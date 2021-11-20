import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Header from '../SharedComponents/Header/Header';
import './BookNowPage.css';

const BookNowPage = () => {
  const [selectedPlace, setSelectedPlace] = useState({});
  const [ticketCount, setTicketCount] = useState(1);
  const id = useHistory().location.pathname.split('/')[2];
  const { loggedInUser } = useAuth();

  useEffect(() => {
    axios
      .get(`https://dreamy-travel.herokuapp.com/place/${id}`)
      .then((res) => setSelectedPlace(res.data))
      .catch((err) => toast.err(err.message));
  }, [id]);

  const handleIncrease = () => setTicketCount(ticketCount + 1);
  const handleDecrease = () =>
    ticketCount > 1 ? setTicketCount(ticketCount - 1) : ticketCount;

  const placeOrder = () => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();
    const order = {};
    const year = date.getFullYear();
    const day = date.getDate();
    const monthName = month[date.getMonth()];
    order.place = selectedPlace.name;
    order.image = selectedPlace.image;
    order.ticketQuantity = ticketCount;
    order.orderTime = `${day}-${monthName}-${year}`;
    order.email = loggedInUser.email;
    axios
      .post('https://dreamy-travel.herokuapp.com/order', order)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `You Order ${ticketCount} ticket of ${selectedPlace.name}`,
            showConfirmButton: false,
            timer: 2500,
          });
          setTicketCount(1);
        }
      });
  };

  return (
    <>
      <Header />
      <section className='container'>
        <div className='selected__place'>
          <img src={selectedPlace.image} alt='' />
          <div className='book__content'>
            <span>
              <h3>{selectedPlace.name}</h3>
              <p>{selectedPlace.description}.</p>
              <h3>${selectedPlace.price}</h3>
              <div>
                <h5 className='d-inline-block me-3'>Quantity:</h5>
                <span onClick={handleDecrease} className='minus__button'>
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className='total__ticket'>{ticketCount}</span>
                <span onClick={handleIncrease} className='plus__button'>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
              <button className='main__button' onClick={placeOrder}>
                Place Order
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNowPage;
