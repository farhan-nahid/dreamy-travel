import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PreLoader from './pages/SharedComponents/PreLoader/PreLoader';
const DashBoard = lazy(() =>
  import('./pages/DashBoardPage/DashBoard/DashBoard')
);
const Home = lazy(() => import('./pages/HomePage/Home/Home'));
const Login = lazy(() => import('./pages/LoginPage/Login/Login'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const BookNowPage = lazy(() => import('./pages/BookNowPage/BookNowPage'));

function App() {
  return (
    <>
      <Toaster />
      <Suspense fallback={<PreLoader />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/book/:id' component={BookNowPage} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={DashBoard} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
