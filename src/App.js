import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PreLoader from './pages/SharedComponents/PreLoader/PreLoader';
const DashBoard = lazy(() =>
  import('./pages/DashBoardPage/DashBoard/DashBoard')
);
const Home = lazy(() => import('./pages/HomePage/Home/Home'));
const Login = lazy(() => import('./pages/LoginPage/Login/Login'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={DashBoard} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
