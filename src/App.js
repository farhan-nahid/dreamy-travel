import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoardPage/DashBoard/DashBoard';
import Home from './pages/HomePage/Home/Home';
import Login from './pages/LoginPage/Login/Login';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={DashBoard} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  );
}

export default App;
