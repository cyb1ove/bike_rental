import { Model, Document } from 'mongoose';
import { Bike } from '../../../common'

export type BikeDocument = Bike & Document;

export interface BikeModel extends Model<Bike> {
  getRentDuration: (_id: string) => Promise<number>
  getPrice: (_id: string) => Promise<number>
  getAllBikes: () => Promise<BikeDocument[]>;
  createBike: (data: Bike) => Promise<BikeDocument[]>;
  setBikeRentProperty: (_id: string, value: string) => Promise<BikeDocument[]>;
  deleteBike: (_id: string) => Promise<BikeDocument[]>;
  setRentTimeRange: (_id: string, time: string) => Promise<void>;
  clearRentTimeRange: (_id: string) => Promise<void>;
}
