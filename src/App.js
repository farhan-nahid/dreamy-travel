import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute';
import PreLoader from './pages/SharedComponents/PreLoader/PreLoader';
const DashBoard = lazy(() =>
  import('./pages/DashBoardPage/DashBoard/DashBoard')
);
const Home = lazy(() => import('./pages/HomePage/Home/Home'));
const Login = lazy(() => import('./pages/LoginPage/Login/Login'));
const Register = lazy(() => import('./pages/LoginPage/Register/Register'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const BookNowPage = lazy(() => import('./pages/BookNowPage/BookNowPage'));

function App() {
  return (
    <AuthProvider>
      <Toaster />
      <Suspense fallback={<PreLoader />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path='/book/:id'>
            <BookNowPage />
          </PrivateRoute>
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
