import { model } from 'mongoose';
import { bikeSchema } from '../schemas/BikeSchema';
import { Bike } from '../../../../common';
import { BikeModel } from '../../types'

export default model<Bike, BikeModel>('bikes', bikeSchema);
