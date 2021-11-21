import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import LoadingSpinner from '../SharedComponents/LoadingSpinner/LoadingSpinner';
import './BookNowPage.css';

const BookNowPage = () => {
  const [selectedPlace, setSelectedPlace] = useState({});
  const [ticketCount, setTicketCount] = useState(1);
  const { loggedInUser } = useAuth();
  const addressRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const { name, description, price, image } = selectedPlace;
  const totalPrice = price * ticketCount;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    document.title = 'Book Now | Dreamy Travel';
  }, []);

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
    order.place = name;
    order.image = image;
    order.ticketQuantity = ticketCount;
    order.price = totalPrice;
    order.orderTime = `${day}-${monthName}-${year}`;
    order.name = nameRef.current.value;
    order.email = emailRef.current.value;
    order.address = addressRef.current.value;
    order.status = 'Pending';
    axios
      .post('https://dreamy-travel.herokuapp.com/order', order)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `You Order ${ticketCount} ticket of ${name}`,
            showConfirmButton: false,
            timer: 2500,
          });
          setTicketCount(1);
          history.push('/dashboard/my-orders');
        }
      });
  };

  return (
    <>
      <Header />
      {!name ? (
        <LoadingSpinner />
      ) : (
        <div className='selected__place container'>
          <img src={image} alt={name} />
          <div className='book__content'>
            <span>
              <h3>{name}</h3>
              <p>{description}.</p>
              <h3>${totalPrice}</h3>
              <div>
                <h5 className='d-inline-block me-3'>Ticket:</h5>
                <span onClick={handleDecrease} className='minus__button'>
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className='total__ticket'>{ticketCount}</span>
                <span onClick={handleIncrease} className='plus__button'>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <input
                  type='text'
                  placeholder='Your Name'
                  ref={nameRef}
                  className='form-control'
                  defaultValue={loggedInUser.displayName}
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  ref={emailRef}
                  className='form-control'
                  defaultValue={loggedInUser.email}
                />
                <input
                  type='text'
                  placeholder='Your Address (Optional)'
                  ref={addressRef}
                  className='form-control'
                />
              </div>
              <button className='main__button' onClick={placeOrder}>
                Place Order
              </button>
            </span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default BookNowPage;
