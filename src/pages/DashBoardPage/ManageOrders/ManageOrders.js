import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import deleteIcon from '../../../assets/images/icon/delete.png';
import editIcon from '../../../assets/images/icon/edit2.png';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import './ManageOrder.css';

const ManageOrders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dreamy-travel.herokuapp.com/all-orders`)
      .then((res) => setAllOrder(res.data))
      .catch((err) => toast.err(err.message));
  }, []);

  return (
    <div>
      <div className='productManage'>
        <h2 className='admin__header'>Manage Product</h2>
        <div className='productManage__products'>
          <div className='productManage__content'>
            <div className='product__row'>
              <div className='product__col'>
                <h2>Product Name</h2>
              </div>
              <div className='product__col'>
                <h2>Email</h2>
              </div>
              <div className='product__col'>
                <h2>Quantity</h2>
              </div>
              <div className='product__col'>
                <h2>Time</h2>
              </div>
              <div className='product__col'>
                <h2>Action</h2>
              </div>
            </div>
            {allOrder.length ? (
              <>
                {allOrder.map((order) => (
                  <div className='product__row' key={order._id}>
                    <div className='product__col'>
                      <h3>{order.place}</h3>
                    </div>
                    <div className='product__col'>
                      <h3 className='text__center'>{order.email}</h3>
                    </div>
                    <div className='product__col'>
                      <h3 className='text__center'>{order.ticketQuantity}</h3>
                    </div>
                    <div className='product__col'>
                      <h3 className='text__center'>{order.orderTime}</h3>
                    </div>
                    <div className='product__col align__items'>
                      <Link
                        to='/dashboard/edit-place'
                        className='pdAction__btn'
                      >
                        <img src={editIcon} alt='editIcon' />
                      </Link>
                      <span className='pdAction__btn'>
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
      </div>
    </div>
  );
};

export default ManageOrders;
