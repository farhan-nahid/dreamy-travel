import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import deleteIcon from '../../../assets/images/icon/delete.png';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import './UserOrder.css';

const UserOrder = ({ email }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dreamy-travel.herokuapp.com/order/${email}`)
      .then((res) => setOrders(res.data))
      .catch((err) => toast.error(err.message));
  }, [email]);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const loading = toast.loading('Deleting Please Wait..!!');
        axios
          .delete(`https://dreamy-travel.herokuapp.com/order/${id}`)
          .then((res) => {
            if (res.status === 200) {
              toast.dismiss(loading);
              Swal.fire('Deleted!', 'Your Order has been deleted.', 'success');
              const restOrder = orders.filter((order) => order._id !== id);
              setOrders(restOrder);
            }
          })
          .catch((err) => {
            toast.dismiss(loading);
            toast.err(err.message);
          });
      }
    });
  };

  return (
    <section className='user__order'>
      <h3>User Order</h3>
      {orders.length ? (
        <div className='user__order__container container'>
          {orders.map((order) => (
            <div key={order._id} className='order__card'>
              <div className='order__img--box'>
                <img src={order.image} alt={order.place} />
              </div>
              <h2>{order.email}</h2>
              <h2>QT {order.ticketQuantity}</h2>
              <h2>{order.orderTime}</h2>
              <span
                className='order__delete'
                onClick={() => handleDeleteOrder(order._id)}
              >
                <img src={deleteIcon} alt='deleteIcon' />
              </span>
            </div>
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default UserOrder;
