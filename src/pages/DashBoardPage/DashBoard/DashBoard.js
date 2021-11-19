import React, { useEffect, useState } from 'react';
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import Edit from '../../../assets/images/icon/edit.png';
import Grid from '../../../assets/images/icon/grid.png';
import Plus from '../../../assets/images/icon/plus.png';
import AddPlace from '../AddPlace/AddPlace';
import ManageOrders from '../ManageOrders/ManageOrders';
import './DashBoard.css';

const DashBoard = () => {
  const match = useRouteMatch();
  const location = useHistory().location;
  const activePath = location.pathname.split('/')[2] || 'manage-orders';
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
            to={`${match.path}/manage-orders`}
          >
            <span>
              <img src={Grid} alt='Grid' /> Manage Orders
            </span>
          </Link>

          <Link
            className={`sidebar__link ${
              active === 'add-place' ? 'active' : ''
            }`}
            to={`${match.path}/add-place`}
          >
            <span>
              <img src={Plus} alt='Grid' /> Add Place
            </span>
          </Link>

          <Link
            className={`sidebar__link ${
              active === 'edit-place' ? 'active' : ''
            }`}
            to={`${match.path}/edit-place`}
          >
            <span>
              <img src={Edit} alt='Grid' /> Edit Product
            </span>
          </Link>
        </nav>
      </div>
      <div className='dashboard__content'>
        <Switch>
          <Route exact path={`${match.path}/`}>
            <ManageOrders />
          </Route>
          <Route path={`${match.path}/manage-orders`}>
            <ManageOrders />
          </Route>
          <Route path={`${match.path}/add-place`}>
            <AddPlace />
          </Route>
          <Route path={`${match.path}/edit-place`}>
            {/* <ProductEdit /> */}
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default DashBoard;
