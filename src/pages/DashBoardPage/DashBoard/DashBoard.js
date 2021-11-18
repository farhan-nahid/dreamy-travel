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
  const activePath = useHistory().location.pathname.split('/')[2] || 'manage';
  const [active, setActive] = useState(activePath);

  useEffect(() => {
    setActive(activePath);
  }, [activePath]);
  console.log(match);

  return (
    <section className='admin'>
      <div className='sidebar'>
        <Link className='sidebar__logo' to='/'>
          Dreamy Travel
        </Link>
        <nav className='sidebar__nav'>
          <Link
            className={`sidebar__link ${active === 'manage' ? 'active' : ''}`}
            to={`${match.path}/manage`}
          >
            <span>
              <img src={Grid} alt='Grid' /> Manage Product
            </span>
          </Link>

          <Link
            className={`sidebar__link ${active === 'add' ? 'active' : ''}`}
            to={`${match.path}/add`}
          >
            <span>
              <img src={Plus} alt='Grid' /> Add Product
            </span>
          </Link>

          <Link
            className={`sidebar__link ${active === 'edit' ? 'active' : ''}`}
            to={`${match.path}/edit`}
          >
            <span>
              <img src={Edit} alt='Grid' /> Edit Product
            </span>
          </Link>
        </nav>
      </div>
      <div className='admin__content'>
        <Switch>
          <Route exact path={`${match.path}/`}>
            <ManageOrders />
          </Route>
          <Route path={`${match.path}/manage`}>
            <ManageOrders />
          </Route>
          <Route path={`${match.path}/add`}>
            <AddPlace />
          </Route>
          <Route path={`${match.path}/edit`}>{/* <ProductEdit /> */}</Route>
        </Switch>
      </div>
    </section>
  );
};

export default DashBoard;
