import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import useAuth from '../../../hooks/useAuth';
import AddPlace from '../AddPlace/AddPlace';
import EditPlace from '../EditPlace/EditPlace';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManagePlace from '../ManagePlace/ManagePlace';
import UserOrder from '../UserOrder/UserOrder';
import './DashBoard.css';

const DashBoard = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const activePath = history.location.pathname.split('/')[2] || 'manage-orders';
  const [active, setActive] = useState(activePath);
  const { loggedInUser } = useAuth();

  useEffect(() => {
    document.title = 'Dashboard | Dreamy Travel';
  }, []);

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
              active === 'my-orders' ? 'active' : ''
            }`}
            to={`${match.path}/my-orders`}
          >
            <span>
              <img src={Grid} alt='Grid' /> My Orders
            </span>
          </Link>

          <Link
            className={`sidebar__link ${
              active === 'edit-place' ? 'active' : ''
            }`}
            to={`${match.path}/edit-place`}
          >
            <span>
              <img src={Edit} alt='Grid' /> Edit Place
            </span>
          </Link>

          <Link
            className={`sidebar__link ${
              active === 'all-place' ? 'active' : ''
            }`}
            to={`${match.path}/all-place`}
          >
            <span>
              <img src={Grid} alt='Grid' /> All Place
            </span>
          </Link>

          <Link to='/' className='sidebar__link '>
            <p className='home__button'>
              {' '}
              <FontAwesomeIcon icon={faArrowLeft} />
              Back Home
            </p>
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
            <EditPlace />
          </Route>
          <Route path={`${match.path}/my-orders`}>
            <UserOrder email={loggedInUser.email} />
          </Route>
          <Route path={`${match.path}/all-place`}>
            <ManagePlace />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default DashBoard;
