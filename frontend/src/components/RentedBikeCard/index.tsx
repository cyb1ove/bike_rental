import React, { useState } from 'react';
import { AvailableBike } from '../../../types';
import BikeCard from '../BikeCard';
import Button from '../Button';
import API from '../../services/api';

type Props = {
  bike: AvailableBike;
}

const RentedBikeCard: React.FC<Props> = ({ bike }) => {
  const [rentTime, setRentTime] = useState(0);

  return (
    <BikeCard
      bike={bike}
    >

      <input
        type="time"
        id="rentTime"
        name="renttime"
        step="3600"
        onChange={(event) => setRentTime(parseInt(event.target.value, 10))}
      />

      <Button
        request={() => API.patch(bike._id, null, {
          params: {
            rent: true,
            time: rentTime,
          },
        })}
        color="blue"
        disabled={!rentTime}
      >
        Rent
      </Button>

      <Button
        request={() => API.delete(bike._id)}
        color="red"
      >
        Delete
      </Button>
    </BikeCard>
  );
};

export default RentedBikeCard;
