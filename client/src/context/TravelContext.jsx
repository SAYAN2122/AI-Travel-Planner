import { createContext, useState } from "react";

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [trip, setTrip] = useState(null);

  return (
    <TravelContext.Provider value={{ trip, setTrip }}>
      {children}
    </TravelContext.Provider>
  );
};