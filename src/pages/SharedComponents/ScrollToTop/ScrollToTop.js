import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
      ? setIsVisible(true)
      : setIsVisible(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  return (
    <button
      onClick={scrollTop}
      className={isVisible ? 'scroll__true' : 'scroll__false'}
    >
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </button>
  );
};

export default ScrollToTop;
