/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import { AvailableBike } from '../../../types';
import { CardStyle } from './styles';

type Props = {
  children: ReactElement | ReactElement[] | null;
  bike: AvailableBike;
  currentPrice?: number | null;
};

const BikeCard: React.FC<Props> = ({ children, bike, currentPrice }) => {
  const textOfCard = `${bike.name}\\${bike.type}\\${currentPrice || bike.price}`;

  return (
    <CardStyle>
      <span>
        {textOfCard}
      </span>
      <span>
        {children}
      </span>
    </CardStyle>
  );
};

export default BikeCard;
