/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React, { MouseEventHandler, ReactNode } from 'react';
import { Request, RequestCallback, HandlerType } from '../../../types';
import Loader from '../../services/loaders';

type Props = {
  children: string;
  request: RequestCallback;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ children, request, disabled = false }) => (
  <button
    type="button"
    onClick={() => new Loader().exec('bikes', request)}
    disabled={disabled}
  >
    { children }
  </button>
);

export default Button;
