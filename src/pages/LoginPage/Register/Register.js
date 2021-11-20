import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import login from '../../../assets/images/login.png';
import useAuth from '../../../hooks/useAuth';
import Header from '../../SharedComponents/Header/Header';

const Register = () => {
  const {
    signInUsingGoogle,
    signInUsingGitHub,
    signUpUsingEmail,
    setIsLoading,
  } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    document.title = 'Register | Bangladesh Dental care';
  }, []);

  // set input values

  const handelNameBlur = (e) => setName(e.target.value);
  const handelEmailBlur = (e) => setEmail(e.target.value);
  const handelPasswordBlur = (e) => setPassword(e.target.value);
  const handelConfirmPasswordBlur = (e) => setConfirmPassword(e.target.value);

  // email sign up

  const handleEmailSignup = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return toast.error('Your Password Must have 8 letter');
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      return toast.error('Password should be at least 1 Spacial character');
    } else if (password !== confirmPassword) {
      return toast.error('Password Not Matched');
    } else {
      signUpUsingEmail(name, email, password);
    }
  };

  //google sign in

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(() => {
        toast.success('Successfully Logged in!!!');
        history.push('/');
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false));
  };
  // github sign in

  const handleGitHubSignIn = () => {
    signInUsingGitHub()
      .then(() => {
        toast.success('Successfully Logged in!!!');
        history.push('/');
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
          <form onSubmit={handleEmailSignup}>
            <div className='single__input'>
              <label htmlFor='registerName'>Your Name</label>
              <input
                id='registerName'
                className='effect-3'
                type='text'
                name='name'
                placeholder='Enter Your Full Name'
                autoComplete='none'
                spellCheck='off'
                required
                onBlur={handelNameBlur}
              />
              <span className='focus-border'></span>
            </div>
            <div className='single__input'>
              <label htmlFor='registerEmail'>Your Email</label>
              <input
                id='registerEmail'
                className='effect-3'
                type='email'
                placeholder='Enter Your Email'
                autoComplete='nope'
                spellCheck='off'
                required
                onBlur={handelEmailBlur}
              />
              <span className='focus-border'></span>
            </div>
            <div className='single__input'>
              <label htmlFor='registerPassword'>Your Password</label>
              <input
                id='registerPassword'
                className='effect-3'
                type='password'
                placeholder='Enter Your Password'
                autoComplete='nope'
                required
                onBlur={handelPasswordBlur}
              />
              <span className='focus-border'></span>
            </div>
            <div className='single__input'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                id='confirmPassword'
                className='effect-3'
                type='password'
                placeholder='Re Type Your Password'
                autoComplete='nope'
                spellCheck='false'
                required
                onBlur={handelConfirmPasswordBlur}
              />
              <span className='focus-border'></span>
            </div>
            <input type='submit' value='Register' />
          </form>
          <p className='toggle__link'>
            Already have Account? <Link to='/login'>Login</Link>
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
    </>
  );
};

export default Register;
