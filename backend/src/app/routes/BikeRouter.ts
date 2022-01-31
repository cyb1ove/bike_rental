import express, { Router } from 'express';
import bikeRouter from '../controllers/BikeControllers';

const router: Router = express.Router();

router
  .post('/', bikeRouter.onCreateBike)
  .get('/list', bikeRouter.onGetUsers)
  .get('/:bikeId/price', bikeRouter.onGetCurrentPrice)
  .patch('/:bikeId/', bikeRouter.onSetBikeIsRented)
  .delete('/:bikeId', bikeRouter.onDeleteBike);

export default router;
