import { createContext, ReactNode, useState } from "react";
import { MedalistsType } from "../types/MedalistsType";
import medalistsJSON from "../data/medalists.json";

interface MedalistsContextData {
  medalists: MedalistsType[];
  filterMedalists: (country: string) => void;
}

interface MedalistsProviderProps {
  children: ReactNode;
}

export const MedalistsContext = createContext({} as MedalistsContextData);

function MedalistsProvider({ children }: MedalistsProviderProps) {
  const initialMedalists = medalistsJSON.sort((a, b) =>
    a.athlete > b.athlete ? 1 : -1
  ) as MedalistsType[];

  const [medalists, setMedalists] = useState<MedalistsType[]>(initialMedalists);

  function filterMedalists(country: string) {
    setMedalists(initialMedalists.filter((item) => item.country === country));
  }

  return (
    <MedalistsContext.Provider value={{ medalists, filterMedalists }}>
      {children}
    </MedalistsContext.Provider>
  );
}

export default MedalistsProvider;
