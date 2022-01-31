export type BikeTypes = 'Road' | 'Mountain' | 'Touring' | 'Folding' | 'BMX' | 'Hybrid';

export interface Bike {
  name: string;
  type: BikeTypes;
  price: number;
  rent?: boolean;
  rent_start?: Date;
  rent_end?: Date;
}
