import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '../../../assets/images/icon/menu.svg';
import useAuth from '../../../hooks/useAuth';
import ProfilePopper from '../ProfilePopper/ProfilePopper';
import './Header.css';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();
  const { loggedInUser } = useAuth();
  useEffect(() => setIsMenuVisible(false), [location]);

  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <NavLink className='navbar__logo' to='/'>
            Dreamy Travel
          </NavLink>
          <div className={`nav__box ${isMenuVisible ? 'visible' : ''}`}>
            <nav className='navbar__nav'>
              <NavLink className='navbar__link' to='/'>
                Home
              </NavLink>
              <NavLink className='navbar__link' to='/dashboard/my-orders'>
                Orders
              </NavLink>
              <NavLink className='navbar__link' to='/dashboard'>
                Dashboard
              </NavLink>
              {!loggedInUser ? (
                <NavLink className='main__button' to='/login'>
                  Login
                </NavLink>
              ) : (
                <ProfilePopper />
              )}
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
