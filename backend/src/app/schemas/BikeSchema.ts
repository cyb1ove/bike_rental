import { Bike } from '../../../../common'
import { Schema, model } from 'mongoose';
import { BikeModel, BikeDocument } from '../../types';
import moment from 'moment';

export const bikeSchema = new Schema<Bike, BikeModel>({
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rent: {
    type: Boolean,
    default: false,
  },
  rent_start: {
    type: Date,
    default: null,
  },
  rent_end: {
    type: Date,
    default: null,
  }
}, { versionKey: false });

bikeSchema.statics.getAllBikes = async function (): Promise<BikeDocument[]> {
  const bikes = await this.find();

  return bikes;
}

bikeSchema.statics.createBike = async function (data): Promise<BikeDocument[]> {
  await this.create(data);
  const bikes = await this.find();

  return bikes;
}

bikeSchema.statics.setBikeRentProperty = async function (_id, value): Promise<BikeDocument[]> {
  await this.findOneAndUpdate({ _id }, { rent: Boolean(value) })
  const bikes = await this.find();

  return bikes;
}

bikeSchema.statics.deleteBike = async function (_id): Promise<BikeDocument[]> {
  await this.findOneAndRemove({ _id });
  const bikes = await this.find();

  return bikes;
}

bikeSchema.statics.setRentTimeRange = async function (_id, time): Promise<void> {
  const duration = moment.duration(time).asMilliseconds();

  await this.findOneAndUpdate({ _id }, {
    rent_start: Date.now(),
    rent_end: Date.now() + duration,
  });
}

bikeSchema.statics.getRentDuration = async function (_id): Promise<number> {
  const bike = await this.findOne({ _id });

  if (bike && bike.rent_start && bike.rent_end) {
    const start = new Date(bike.rent_start)
    const end = new Date(bike.rent_end);

    return (end.getTime() - start.getTime()) / 3600000;
  }

  return 0;
}

bikeSchema.statics.clearRentTimeRange = async function (_id): Promise<void> {
  await this.findOneAndUpdate({ _id }, {
    rent_start: null,
    rent_end: null,
  });
}

bikeSchema.statics.getPrice = async function (_id): Promise<number> {
  const bike = await this.findOne({ _id });

  if (bike) {
    return bike.price;
  }

  return 0;
}

