import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '../../../assets/images/icon/menu.svg';
import './Header.css';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();
  useEffect(() => setIsMenuVisible(false), [location]);

  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <Link className='navbar__logo' to='/'>
            Dreamy Travel
          </Link>
          <div className={`nav__box ${isMenuVisible ? 'visible' : ''}`}>
            <nav className='navbar__nav'>
              <Link className='navbar__link' to='/'>
                Home
              </Link>
              <Link className='navbar__link' to='/orders'>
                Orders
              </Link>
              <Link className='navbar__link' to='/dashboard'>
                Dashboard
              </Link>
              <Link className='navbar__link' to='/deals'>
                Deals
              </Link>
              <Link className='main__button' to='/login'>
                Login
              </Link>
              {/* {user.isLoggedIn && (
                <Link to='/profile' className='navbar__img--box'>
                  <img
                    className='navbar__img object-cover'
                    src={user.photo}
                    alt={user.name}
                  />
                  <span>{user.name}</span>
                </Link>
              )}
              {!user.isLoggedIn && (
                <Link className='btn btn__primary' to='/login'>
                  Login
                </Link>
              )} */}
            </nav>
          </div>
          <button
            className='nav__menu--icon'
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <img src={MenuIcon} alt='Mobile Menu' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
