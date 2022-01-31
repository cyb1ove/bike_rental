/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { AvailableBike } from '../types';
import API from './services/api';
import ContentGroup from './components/ContentGroup';
import BikeForm from './components/BikeForm';
import UnrentedBikeCard from './components/UnrentedBikeCard';
import RentedBikeCard from './components/RentedBikeCard';
import Loader from './services/loaders';

function App() {
  const [bikes, setBikes] = useState<Array<AvailableBike>>([]);
  let loader;

  useEffect(() => {
    loader = new Loader('bikes', [setBikes]);
    loader.exec('bikes', () => API.get('/list'));
  }, []);

  return (
    <ContentGroup
      title="Awesome Bike Rental"
      primary
    >
      <ContentGroup
        title="Create new rent"
      >
        <BikeForm />
      </ContentGroup>

      <ContentGroup
        title="Your rent(Total: $<%-amountPrice%>)"
      >
        {
          bikes
            .filter((bike) => bike.rent)
            .map((bike) => (
              <UnrentedBikeCard
                key={bike._id}
                bike={bike}
              />
            ))
        }
      </ContentGroup>

      <ContentGroup
        title="Available bicycles (<%-count%>)"
      >
        {
          bikes
            .filter((bike) => !bike.rent)
            .map((bike) => (
              <RentedBikeCard
                key={bike._id}
                bike={bike}
              />
            ))
        }
      </ContentGroup>
    </ContentGroup>
  );
}

export default App;
