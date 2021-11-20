import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Edit from '../../../assets/images/icon/edit.png';
import Grid from '../../../assets/images/icon/grid.png';
import Plus from '../../../assets/images/icon/plus.png';
import AddPlace from '../AddPlace/AddPlace';
import EditPlace from '../EditPlace/EditPlace';
import ManageOrders from '../ManageOrders/ManageOrders';
import UserOrder from '../UserOrder/UserOrder';
import './DashBoard.css';

const DashBoard = () => {
  const location = useLocation().pathname.split('/')[1];
  const history = useHistory();
  const activePath = history.location.pathname.split('/')[2] || 'manage-orders';
  const [active, setActive] = useState(activePath);

  useEffect(() => {
    setActive(activePath);
  }, [activePath]);

  return (
    <section className='dashboard'>
      <div className='sidebar'>
        <Link className='sidebar__logo' to='/'>
          Dreamy Travel
        </Link>
        <nav className='sidebar__nav'>
          <Link
            className={`sidebar__link ${
              active === 'manage-orders' ? 'active' : ''
            }`}
            to={`/${location}/manage-orders`}
          >
            <span>
              <img src={Grid} alt='Grid' /> Manage Orders
            </span>
          </Link>

          <Link
            className={`sidebar__link ${
              active === 'add-place' ? 'active' : ''
            }`}
            to={`/${location}/add-place`}
          >
            <span>
              <img src={Plus} alt='Grid' /> Add Place
            </span>
          </Link>

          <Link
            className={`sidebar__link ${
              active === 'edit-place' ? 'active' : ''
            }`}
            to={`/${location}/edit-place`}
          >
            <span>
              <img src={Edit} alt='Grid' /> Edit Product
            </span>
          </Link>
          <Link
            className={`sidebar__link ${
              active === 'my-orders' ? 'active' : ''
            }`}
            to={`/${location}/my-orders`}
          >
            <span>
              <img src={Grid} alt='Grid' /> My Orders
            </span>
          </Link>
        </nav>
      </div>
      <div className='dashboard__content'>
        <Switch>
          <Route exact path={`/${location}/`}>
            <ManageOrders />
          </Route>
          <Route path={`/${location}/manage-orders`}>
            <ManageOrders />
          </Route>
          <Route path={`/${location}/add-place`}>
            <AddPlace />
          </Route>
          <Route path={`/${location}/edit-place`}>
            <EditPlace />
          </Route>
          <Route path={`/${location}/my-orders`}>
            <UserOrder />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default DashBoard;
