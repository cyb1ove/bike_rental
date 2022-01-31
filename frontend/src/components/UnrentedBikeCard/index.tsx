/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { AvailableBike } from '../../../types';
import BikeCard from '../BikeCard';
import Button from '../Button';
import API from '../../services/api';
import Loader from '../../services/loaders';

type Props = {
  bike: AvailableBike;
  onSetAmountPrice?: (arg: number) => void;
}

const UnrentedBikeCard: React.FC<Props> = ({ bike, onSetAmountPrice = () => {} }) => {
  const [actualPrice, setActualPrice] = useState<number>(0);
  // let loader;

  useEffect(() => {
    const loadPrice = async () => {
      const { data: { currentPrice } } = await API.get(`${bike._id}/price`);

      setActualPrice(currentPrice);
      onSetAmountPrice(currentPrice);
    };

    loadPrice();
    // const loader = new Loader('currentPrice', [setActualPrice, onSetAmountPrice]);
    // loader.exec('currentPrice', () => API.get(`${bike._id}/price`));
  }, []);

  useEffect(() => () => {
    if (actualPrice) {
      onSetAmountPrice(-actualPrice);
    }
  }, [actualPrice]);

  return (
    <BikeCard
      currentPrice={actualPrice}
      bike={bike}
    >
      <Button
        request={() => API.patch(bike._id, null, { params: { rent: '' } })}
      >
        Cancel rent
      </Button>
    </BikeCard>
  );
};

export default UnrentedBikeCard;
