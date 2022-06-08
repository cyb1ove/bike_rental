/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';

const useAdder = (initial: number): [number, (arg: number) => void] => {
  const [number, setNumber] = useState<number>(initial);

  const setter = useCallback((count: number) => {
    setNumber((prevState) => prevState + count);
  }, []);

  return [number, setter];
};

export default useAdder;
