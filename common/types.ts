export type TypesOfBike = ['road', 'mountain', 'custom'];

export interface Bike {
  name: string;
  type: TypesOfBike;
  price: number;
}
