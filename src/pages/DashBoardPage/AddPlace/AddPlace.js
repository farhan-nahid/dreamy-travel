import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import './AddPlace.css';

const AddPlace = () => {
  const [image, setImage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!image) return;
    const product = data;
    product.image = image;
    axios
      .post('http://localhost:5000/add-place', product)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Place added in our database',
            showConfirmButton: false,
            timer: 2500,
          });
          reset();
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set('key', '1c7b42d86523b93639ae849aae708b2e');
    imageData.append('image', e.target.files[0]);
    const loading = toast.loading('Uploading...Please wait!');

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then((res) => {
        if (res.status === 200) {
          toast.dismiss(loading);
          toast.success('Successfully Upload The Image...!!!');
          setImage(res.data.data.display_url);
        }
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      });
  };

  return (
    <section className='add__place'>
      <h3> Add Place</h3>
      <div className='container'>
        <h5 className='warning mt-4'>Please upload image (PNG, JPG, JPEG)</h5>
        <form onSubmit={handleSubmit(onSubmit)} className='add__place__form'>
          <div>
            <label htmlFor='name'>Place Name</label>
            <input
              {...register('name', { required: true })}
              placeholder='Enter a Place Name'
              className='form-control'
              id='name'
              autoComplete='off'
              spellCheck='false'
            />
            {errors.name && (
              <span className='text-danger d-block'>
                This field is required*
              </span>
            )}
          </div>

          <div>
            <label htmlFor='price'>Place Price</label>
            <input
              type='number'
              {...register('price', { required: true })}
              placeholder='Enter Your Price'
              className='form-control'
              id='price'
              autoComplete='off'
              spellCheck='false'
            />
            {errors.price && (
              <span className='text-danger d-block'>
                This field is required*
              </span>
            )}
          </div>

          <div>
            <label htmlFor='description'>Description</label>
            <textarea
              {...register('description', { required: true })}
              placeholder='Enter some Description'
              className='form-control'
              rows='5'
              id='description'
              autoComplete='off'
              spellCheck='false'
            />
            {errors.description && (
              <span className='text-danger d-block'>
                This field is required*
              </span>
            )}
          </div>

          <div>
            <label htmlFor='img'>Image</label>
            <input
              {...register('image', { required: true })}
              type='file'
              className='form-control'
              id='img'
              onChange={handleImageUpload}
            />
            {errors.image && (
              <span className='text-danger d-block'>
                This field is required*
              </span>
            )}
          </div>

          <input type='submit' className='main__button mt-5' />
        </form>
      </div>
    </section>
  );
};

export default AddPlace;
