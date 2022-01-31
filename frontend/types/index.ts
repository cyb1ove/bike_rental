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

export interface LoaderInterface {
  exec(arg: RequestCallback): Promise<void>;
}

export type ChildrenArray = ReactNode & {
  props?: {
    bike?: AvailableBike;
  };
}

export type SettersArray = (Dispatch<SetStateAction<any>> | ((arg: any) => void))[]
