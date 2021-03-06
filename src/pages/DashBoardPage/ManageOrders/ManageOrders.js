import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import deleteIcon from '../../../assets/images/icon/delete.png';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import './ManageOrder.css';

const ManageOrders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get('https://dreamy-travel.herokuapp.com/all-orders')
      .then((res) => setAllOrder(res.data))
      .catch((err) => toast.err(err.message));
  }, []);

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
              const restOrder = allOrder.filter((order) => order._id !== id);
              setAllOrder(restOrder);
            }
          })
          .catch((err) => {
            toast.dismiss(loading);
            toast.err(err.message);
          });
      }
    });
  };

  const handleStatusChange = (id, status) => {
    const modifiedOrders = [];
    allOrder.forEach((order) => {
      if (order._id === id) {
        order.status = status;
      }
      modifiedOrders.push(order);
    });
    setAllOrder(modifiedOrders);

    const modifiedStatus = { id, status };
    const loading = toast.loading('Updating....Please wait!');
    axios
      .put(`https://dreamy-travel.herokuapp.com/order/${id}`, modifiedStatus)
      .then((res) => {
        if (res.status === 200) {
          toast.dismiss(loading);
          toast.success(`Order is ${modifiedStatus.status}`);
        }
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  return (
    <section className='order__manage'>
      <h3>Manage Order</h3>
      <div className='order__manage__orders'>
        <div className='order__manage__content'>
          <div className='order__row'>
            <div className='order__col'>
              <h2>Order Name</h2>
            </div>
            <div className='order__col'>
              <h2>Email</h2>
            </div>
            <div className='order__col'>
              <h2>Quantity</h2>
            </div>
            <div className='order__col'>
              <h2>Time</h2>
            </div>
            <div className='order__col'>
              <h2>Action</h2>
            </div>
            <div className='order__col'>
              <h2>Status</h2>
            </div>
          </div>
          {allOrder.length ? (
            <>
              {allOrder.map((order) => (
                <div className='order__row' key={order._id}>
                  <div className='order__col'>
                    <h4>{order.place}</h4>
                  </div>
                  <div className='order__col'>
                    <h4 className='text__center'>{order.email}</h4>
                  </div>
                  <div className='order__col align__items'>
                    <h4 className='text__center'>{order.ticketQuantity}</h4>
                  </div>
                  <div className='order__col align__items'>
                    <h4 className='text__center'>{order.orderTime}</h4>
                  </div>
                  <div className='order__col align__items'>
                    <span
                      className='orderAction__btn'
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      <img src={deleteIcon} alt='deleteIcon' />
                    </span>
                  </div>
                  <div className='order__col'>
                    <select
                      className={
                        order.status === 'Pending'
                          ? 'btn btn-warning'
                          : 'btn btn-success'
                      }
                      defaultValue={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option className='bg-white text-muted'>Pending</option>
                      <option className='bg-white text-muted'>Approved</option>
                    </select>
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

export default ManageOrders;
