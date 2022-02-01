import React from 'react';
import { RequestCallback, Colors } from '../../../types';
import Loader from '../../services/loaders';
import StyledButton from './styles';

type Props = {
  children: string;
  request?: RequestCallback;
  color?: keyof Colors;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  request,
  disabled = false,
  color = 'gray',
}) => (
  <StyledButton
    type="button"
    onClick={request && (() => new Loader().exec('bikes', request))}
    disabled={disabled}
    color={color}
  >
    { children }
  </StyledButton>
);

export default Button;
