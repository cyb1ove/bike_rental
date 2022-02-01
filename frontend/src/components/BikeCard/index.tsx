import React, { ReactElement } from 'react';
import { AvailableBike } from '../../../types';
import { CardStyle, TextContentStyle, ControlPanelStyle } from './styles';

type Props = {
  children: ReactElement | ReactElement[] | null;
  bike: AvailableBike;
  currentPrice?: number | null;
};

const BikeCard: React.FC<Props> = ({ children, bike, currentPrice }) => {
  const price = (currentPrice || Number(bike.price)).toFixed(2);
  const textOfCard = `${bike.name} / ${bike.type} / $${price}`;

  return (
    <CardStyle
      color="white"
    >
      <TextContentStyle>
        {textOfCard}
      </TextContentStyle>

      <ControlPanelStyle>
        {children}
      </ControlPanelStyle>
    </CardStyle>
  );
};

export default BikeCard;
