import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory, useLocation } from 'react-router-dom';
import login from '../../../assets/images/login.png';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../../SharedComponents/Header/Header';
import './Login.css';

const Login = () => {
  const {
    signInUsingEmail,
    signInUsingGoogle,
    signInUsingGitHub,
    setIsLoading,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();
  const redirect_URI = location.state?.from || '/';

  useEffect(() => {
    document.title = 'Login | Dreamy Travel';
  }, []);

  const handelEmailBlur = (e) => setEmail(e.target.value);
  const handlePasswordBlur = (e) => setPassword(e.target.value);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    signInUsingEmail(email, password);
    history.push(redirect_URI);
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(() => {
        history.push(redirect_URI);
        toast.success('Successfully Logged in!!!');
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false));
  };

  const handleGitHubSignIn = () => {
    signInUsingGitHub()
      .then(() => {
        history.push(redirect_URI);
        toast.success('Successfully Logged in!!!');
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Header />
      <section className='container grid__container'>
        <div>
          <img src={login} alt='login' />
        </div>
        <div className='login__signUp__methods'>
          <form onSubmit={handleEmailLogin}>
            <div className='single__input'>
              <input
                id='loginEmail'
                className='effect-3'
                type='email'
                placeholder='Enter Your Email'
                required
                onBlur={handelEmailBlur}
              />
              <span className='focus-border'></span>
            </div>
            <div className='single__input'>
              <input
                id='loginPassword'
                className='effect-3'
                type='password'
                placeholder='Enter Your Password'
                required
                onBlur={handlePasswordBlur}
              />
              <span className='focus-border'></span>
            </div>
            <input type='submit' value='Login' />
          </form>
          <p className='toggle__link'>
            Don't have any Account? <Link to='/register'>Sign up</Link>
          </p>

          <h5 className='other__methods'>OR</h5>

          <button className='google__button' onClick={handleGoogleSignIn}>
            <FontAwesomeIcon icon={faGoogle} />
            Google sign in
          </button>
          <button className='github__button' onClick={handleGitHubSignIn}>
            <FontAwesomeIcon icon={faGithub} />
            GitHub sign in
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
