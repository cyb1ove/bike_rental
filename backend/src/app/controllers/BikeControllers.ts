import { Request, Response, NextFunction } from 'express';
import BikeModel from '../models/BikeModel';

export default {
  onCreateBike: async (request: Request, response: Response): Promise<Response> => {
    try {
      const bikeData = request.body;
      const bikes = await BikeModel.createBike(bikeData);

      return response.status(200).json({ success: true, bikes })
    } catch (error) {
      return response.status(500).json({ success: false, error })
    }
  },
  onGetUsers: async (request: Request, response: Response , next: NextFunction): Promise<Response | void> => {
    try {
      const bikes = await BikeModel.getAllBikes();

      return response.status(200).json({ success: true, bikes })
    } catch (error) {
      next(error);
    }
  },
  onSetBikeIsRented: async (request: Request, response: Response): Promise<Response> => {
    try {
      const id = request.params.bikeId;
      const rentValue = request.query.rent as string;
      const rentTime = request.query.time as string;

      if (rentTime) {
        await BikeModel.setRentTimeRange(id, rentTime);
      } else {
        await BikeModel.clearRentTimeRange(id);
      }

      const bikes = await BikeModel.setBikeRentProperty(id, rentValue);

      return response.status(200).json({ success: true, bikes })
    } catch (error) {
      return response.status(500).json({ success: false, error })
    }
  },
  onDeleteBike: async (request: Request, response: Response): Promise<Response> => {
    try {
      const id = request.params.bikeId;
      const bikes = await BikeModel.deleteBike(id);

      return response.status(200).json({ success: true, bikes })
    } catch (error) {
      return response.status(500).json({ success: false, error })
    }
  },
  onGetCurrentPrice: async (request: Request, response: Response): Promise<Response> => {
    try {
      const id = request.params.bikeId;
      const price = await BikeModel.getPrice(id)
      const duration = await BikeModel.getRentDuration(id);

      if (duration > 10) {
        return response.status(200).json({ success: true, currentPrice: price / 2 })
      } else {
        return response.status(200).json({ success: true, currentPrice: price })
      };
    } catch (error) {
      return response.status(500).json({ success: false, error })
    }
  }
}
