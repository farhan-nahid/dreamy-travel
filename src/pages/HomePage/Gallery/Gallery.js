import React from 'react';
import gallery1 from '../../../assets/images/gallery-image1.jpg';
import gallery10 from '../../../assets/images/gallery-image10.jpg';
import gallery11 from '../../../assets/images/gallery-image11.jpg';
import gallery12 from '../../../assets/images/gallery-image12.jpg';
import gallery2 from '../../../assets/images/gallery-image2.jpg';
import gallery3 from '../../../assets/images/gallery-image3.jpg';
import gallery4 from '../../../assets/images/gallery-image4.jpg';
import gallery5 from '../../../assets/images/gallery-image5.jpg';
import gallery6 from '../../../assets/images/gallery-image6.jpg';
import gallery7 from '../../../assets/images/gallery-image7.jpg';
import gallery8 from '../../../assets/images/gallery-image8.jpg';
import gallery9 from '../../../assets/images/gallery-image9.jpg';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className='container gallery__container'>
      <h2>OUR GALLERY</h2>
      <p>This is our Gallery. Hare you can see some amazing photos.</p>
      <div className='gallery'>
        <img src={gallery1} alt='gallery1' />
        <img src={gallery2} alt='gallery2' />
        <img src={gallery3} alt='gallery3' />
        <img src={gallery4} alt='gallery4' />
        <img src={gallery5} alt='gallery5' />
        <img src={gallery6} alt='gallery6' />
        <img src={gallery7} alt='gallery7' />
        <img src={gallery8} alt='gallery8' />
        <img src={gallery9} alt='gallery9' />
        <img src={gallery10} alt='gallery10' />
        <img src={gallery11} alt='gallery11' />
        <img src={gallery12} alt='gallery12' />
      </div>
    </section>
  );
};

export default Gallery;
