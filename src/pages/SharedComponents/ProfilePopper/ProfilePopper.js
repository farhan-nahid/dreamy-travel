import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './ProfilePopper.css';

const ProfilePopper = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { loggedInUser, logOut } = useAuth();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <img
        onClick={handleClick}
        src={loggedInUser.photoURL}
        alt={loggedInUser.name}
        className='rounded-circle navbar__img'
      />

      <Overlay show={show} target={target} placement='bottom' container={ref}>
        <Popover id='popover-contained' className='profile__body'>
          <Popover.Body>
            <h6>{loggedInUser.displayName}</h6>
            <p>{loggedInUser.email}</p>
            <button onClick={logOut} className='main__button'>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default ProfilePopper;
