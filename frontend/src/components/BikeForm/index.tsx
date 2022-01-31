/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { AvailableBike } from '../../../types';
import API from '../../services/api';
import Loader from '../../services/loaders';
import { CardStyle, FormStyle } from '../BikeCard/styles';

const BikeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<AvailableBike>();

  const onSubmit = (data: AvailableBike) => (
    new Loader().exec('bikes', () => API.post('/', data))
  );

  return (
    <CardStyle>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Bike name:
          <input {...register('name')} />
        </label>
        <label htmlFor="type">
          Bike type:
          <input {...register('type')} />
        </label>
        <label htmlFor="price">
          Rent price:
          <input {...register('price')} />
        </label>
        <button type="submit">Submit rent</button>
      </FormStyle>
    </CardStyle>
  );
};

export default BikeForm;
