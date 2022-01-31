/* eslint-disable no-unused-vars */
/* eslint-disable no-constructor-return */
import {
  RequestCallback,
  SettersArray,
  SettersObject,
  Setter,
  ServerResponse,
  DataResponce,
} from '../../types';

class Loader {
  static instance: any;

  public setters: SettersObject = {};

  constructor(key?: string, newSetters?: SettersArray) {
    let currentThis;

    if (typeof Loader.instance === 'object') {
      currentThis = Loader.instance;
    } else {
      Loader.instance = this;
      currentThis = this;
    }

    if (key && newSetters) {
      currentThis.setters[key] = newSetters;
    }

    return currentThis;
  }

  async exec(key: keyof DataResponce, request: RequestCallback): Promise<void> {
    const response = await request() as ServerResponse;

    this.setters[key].forEach((setter: Setter) => {
      setter(response.data[key]);
    });
  }
}

export default Loader;
