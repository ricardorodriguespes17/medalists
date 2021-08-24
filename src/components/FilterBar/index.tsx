import {
  ButtonClearFilters,
  FilterBarContainer,
  FilterBarItem,
  IconSearch,
  InputSearch,
  InputSearchBox,
} from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

function FilterBar() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    searchFilterCountries(searchValue);
  }, [searchValue]);

  function searchFilterCountries(word: string) {}

  return (
    <FilterBarContainer>
      <FilterBarItem>
        <InputSearchBox>
          <InputSearch
            placeholder="Busca país"
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
      <FilterBarItem>
        <ButtonClearFilters>Limpar</ButtonClearFilters>
      </FilterBarItem>
    </FilterBarContainer>
  );
}

export default FilterBar;
