import { Bike } from "../../../common";
import BikeModel from "../app/models/BikeModel";

const bikes: Bike[] = [
  {
    name: "Merida One-Sixty 7. 700",
    type: "Mountain",
    price: 50,
  },
  {
    name: "Canyon Spectral AL 7.0 EX",
    type: "Mountain",
    price: 30,
  },
  {
    name: "Giant XtC Composite 29",
    type: "Mountain",
    price: 40,
  },
  {
    name: "Merida Ride Disc 3000",
    type: "Road",
    price: 70,
  },
  {
    name: "Revolution Wraith 2014",
    type: "Road",
    price: 50,
  },
  {
    name: "Saracen HACK 2",
    type: "Hybrid",
    price: 60,
  },
  {
    name: "Carrera Gryphon",
    type: "Hybrid",
    price: 30,
  },
  {
    name: "Marin Fairfax SC5",
    type: "Hybrid",
    price: 40,
  },
  {
    name: "Giant Alight 3 2015",
    type: "Hybrid",
    price: 90,
  },
  {
    name: "Giant Escape 3 city 2015",
    type: "Hybrid",
    price: 100,
  },
];

export default function seedDB() {
  try {
    bikes.forEach(data => {
      const bike = new BikeModel(data);
      bike.save();
    });

    console.log("DB was seeded");
  } catch (error) {
    console.log("DB wasn't seeded");
  }
}
