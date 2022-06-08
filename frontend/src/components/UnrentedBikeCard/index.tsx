import React, { useState, useEffect } from 'react';
import { AvailableBike } from '../../../types';
import BikeCard from '../BikeCard';
import Button from '../Button';
import API from '../../services/api';

type Props = {
  bike: AvailableBike;
  onSetAmountPrice?: (arg: number) => void;
}

const UnrentedBikeCard: React.FC<Props> = ({ bike, onSetAmountPrice = () => {} }) => {
  const [actualPrice, setActualPrice] = useState<number>(0);

  useEffect(() => {
    const loadPrice = async () => {
      const { data: { currentPrice } } = await API.get(`${bike._id}/price`);

      setActualPrice(currentPrice);
      onSetAmountPrice(currentPrice);
    };

    loadPrice();
  }, [bike._id, onSetAmountPrice]);

  useEffect(() => () => {
    if (actualPrice) {
      onSetAmountPrice(-actualPrice);
    }
  }, [actualPrice, onSetAmountPrice]);

  return (
    <BikeCard
      currentPrice={actualPrice}
      bike={bike}
    >
      <Button
        request={() => API.patch(bike._id, null, { params: { rent: '' } })}
        color="red"
      >
        Cancel rent
      </Button>
    </BikeCard>
  );
};

export default UnrentedBikeCard;
