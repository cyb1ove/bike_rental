import express from 'express';
import '../database'
import cors from 'cors';
import bikesRouter from './routes/BikeRouter'

class App {
  server: express.Application;
    
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/bikes', bikesRouter);
  }
}

export default new App().server;
