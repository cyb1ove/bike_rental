/* eslint-disable no-unused-vars */
/* eslint-disable no-constructor-return */
import { Dispatch, SetStateAction } from 'react';
import { LoaderInterface, RequestCallback, AvailableBike } from '../../types';

class Loader implements LoaderInterface {
  static instance: any;

  constructor(public setter?: Dispatch<SetStateAction<AvailableBike[]>>) {
    this.setter = setter;

    if (typeof Loader.instance === 'object') {
      return Loader.instance;
    }

    Loader.instance = this;

    return this;
  }

  async exec(request: RequestCallback): Promise<void> {
    console.log(request);
    const response = await request();

    if (this.setter) {
      this.setter(response.data.bikes);
    }
  }
}

export default Loader;
