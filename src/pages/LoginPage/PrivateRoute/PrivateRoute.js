import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, rest }) => {
  const { loggedInUser, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className='d-flex mt-5 pt-5 justify-content-center'>
        <Spinner animation='border' />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
