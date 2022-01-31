import React, { useContext } from 'react';

type Props = {
  children: React.ReactNode;
}

const TokenContext = React.createContext<number | null>(null);

export const TokenProvider: React.FC<Props> = ({ children }) => (
  <TokenContext.Provider value={Date.now()}>
    { children }
  </TokenContext.Provider>
);

export const useToken = () => useContext(TokenContext);
