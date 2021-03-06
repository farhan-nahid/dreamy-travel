import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Not Found | Dreamy Travel';
  }, []);
  return (
    <>
      <section className='container notFound__container'>
        <div className='notFound'>
          <h2 className='notFound__title'>404</h2>
          <h3 className='notFound__subtitle'>Page not found</h3>
          <Link to='/' className='main__button'>
            Back to homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
