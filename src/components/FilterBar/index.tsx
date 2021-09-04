import {
  FilterBarContainer,
  FilterBarItem,
  IconSearch,
  InputSearch,
  InputSearchBox,
} from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../contexts/CountryContext";

function FilterBar() {
  const { loadCountries } = useContext(CountryContext);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    loadCountries(searchValue);
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <FilterBarContainer>
      <FilterBarItem>
        <InputSearchBox>
          <InputSearch
            placeholder="Search country"
            value={searchValue}
            onChange={(event) =>
              setSearchValue(event.target.value.toUpperCase())
            }
            maxLength={3}
          />
          <IconSearch>
            <BiSearchAlt />
          </IconSearch>
        </InputSearchBox>
      </FilterBarItem>
    </FilterBarContainer>
  );
}

export default FilterBar;
