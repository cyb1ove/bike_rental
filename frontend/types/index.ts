/* eslint-disable no-unused-vars */
import { AxiosResponse } from 'axios';
import { ReactNode, Dispatch, SetStateAction } from 'react';
import { Bike } from '../../common';

export type AvailableBike = Bike & {
  _id: string;
}

export type Request = Promise<AxiosResponse<{ bikes: AvailableBike[] }>>;
export type RequestCallback = () => Request;
export type HandlerType = (arg: RequestCallback) => Promise<void>;

export type ChildrenArray = ReactNode & {
  props?: {
    bike?: AvailableBike;
  };
}

export type Setter = Dispatch<SetStateAction<any>> | ((arg: any) => void)
export type SettersArray = Setter[]
export type SettersObject = {
  [key: string]: SettersArray
}

export type DataResponce = {
  bikes?: AvailableBike[];
  currentPrice?: number;
}
export type ServerResponse = {
  data: DataResponce;
}

export interface Colors {
  white: string,
  gray: string,
  blue: string,
  green: string,
  red: string,
}
