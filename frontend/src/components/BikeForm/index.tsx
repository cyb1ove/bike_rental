import React from 'react';
import { useForm } from 'react-hook-form';
import { AvailableBike } from '../../../types';
import API from '../../services/api';
import Loader from '../../services/loaders';
import { CardStyle } from '../BikeCard/styles';
import FormStyle from './style';
import StyledButton from '../Button/styles';

const BikeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<AvailableBike>();

  const onSubmit = (data: AvailableBike) => (
    new Loader().exec('bikes', () => API.post('/', data))
  );

  return (
    <CardStyle
      color="gray"
    >
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <span>Bike name:</span>
          <input {...register('name')} />
        </label>

        <label htmlFor="type">
          <span>Bike type:</span>
          <select {...register('type')}>
            <option value="Road">Road</option>
            <option value="Mountain">Mountain</option>
            <option value="Touring">Touring</option>
          </select>
        </label>

        <label htmlFor="price">
          <span>Rent price:</span>
          <input {...register('price')} />
        </label>

        <StyledButton
          type="submit"
          color="green"
        >
          Submit rent
        </StyledButton>
      </FormStyle>
    </CardStyle>
  );
};

export default BikeForm;
