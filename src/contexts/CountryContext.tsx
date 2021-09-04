import { createContext, ReactNode, useEffect, useState } from "react";
import { MedalistsType } from "../types/MedalistsType";
import medalistsJSON from "../data/medalists.json";
import { CountryType } from "../types/CountryType";

interface CountryContextData {
  countries: CountryType[];
  loadCountries: (word?: string) => void;
}

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryContext = createContext({} as CountryContextData);

function CountryProvider({ children }: CountryProviderProps) {
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    loadCountries();
  }, []);

  function loadCountries(word?: string) {
    const initialMedalists = medalistsJSON as MedalistsType[];

    let sortedCountries = [] as CountryType[];

    for (let i = 0; i < initialMedalists.length; i++) {
      let medalist = initialMedalists[i];

      if (sortedCountries.some((item) => medalist.country === item.symbol)) {
        const index = sortedCountries.findIndex(
          (country) => country.symbol === medalist.country
        );

        if (index >= 0) {
          const item = sortedCountries[index];

          sortedCountries[index] = {
            ...item,
            gold: item.gold + (medalist.medal === "Gold" ? 1 : 0),
            silver: item.silver + (medalist.medal === "Silver" ? 1 : 0),
            bronze: item.bronze + (medalist.medal === "Bronze" ? 1 : 0),
            total: item.total + 1,
          };
        }
      } else {
        sortedCountries.push({
          symbol: medalist.country,
          gold: medalist.medal === "Gold" ? 1 : 0,
          silver: medalist.medal === "Silver" ? 1 : 0,
          bronze: medalist.medal === "Bronze" ? 1 : 0,
          total: 1,
        });
      }
    }

    sortedCountries.sort((a, b) => {
      let goldDif = b.gold - a.gold;
      let silverDif = b.silver - a.silver;
      let bronzDif = b.bronze - a.bronze;

      return goldDif !== 0
        ? goldDif
        : silverDif !== 0
        ? silverDif
        : bronzDif !== 0
        ? bronzDif
        : 0;
    });

    if (word && word.trim() !== "") {
      sortedCountries = sortedCountries.filter((item) =>
        item.symbol.includes(word)
      );
    }

    setCountries(sortedCountries);
  }

  return (
    <CountryContext.Provider value={{ countries, loadCountries }}>
      {children}
    </CountryContext.Provider>
  );
}

export default CountryProvider;
