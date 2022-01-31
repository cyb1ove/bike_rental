/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import { AvailableBike } from '../../../types';

type Props = {
  children: ReactElement | ReactElement[] | null;
  bike: AvailableBike;
  currentPrice?: number | null;
};

const BikeCard: React.FC<Props> = ({ children, bike, currentPrice }) => {
  const textOfCard = `${bike.name}\\${bike.type}\\${currentPrice || bike.price}`;

  return (
    <div>
      <span>
        {textOfCard}
      </span>

      <span>
        {children}
      </span>
    </div>
  );
};

export default BikeCard;
