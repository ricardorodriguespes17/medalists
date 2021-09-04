import { useContext } from "react";
import { CountryContext } from "../../contexts/CountryContext";
import {
  TableItemNumbers,
  MainTableContainer,
  MainTableCountryItem,
  TableItemName,
  MainTableHeader,
  TableItemHeaderName,
  MainTableCountryList,
} from "./styles";

function MainTable() {
  const { countries } = useContext(CountryContext);

  return (
    <MainTableContainer>
      <MainTableHeader>
        <TableItemNumbers>#</TableItemNumbers>
        <TableItemHeaderName>Country</TableItemHeaderName>
        <TableItemNumbers>🥇</TableItemNumbers>
        <TableItemNumbers>🥈</TableItemNumbers>
        <TableItemNumbers>🥉</TableItemNumbers>
        <TableItemNumbers>Total</TableItemNumbers>
      </MainTableHeader>
      <MainTableCountryList>
        {countries.map((item, index) => (
          <MainTableCountryItem key={index}>
            <TableItemNumbers>{index + 1}</TableItemNumbers>
            <TableItemName href={`/country/${item.symbol}`}>
              {item.symbol}
            </TableItemName>
            <TableItemNumbers>{item.gold}</TableItemNumbers>
            <TableItemNumbers>{item.silver}</TableItemNumbers>
            <TableItemNumbers>{item.bronze}</TableItemNumbers>
            <TableItemNumbers>
              {item.gold + item.silver + item.bronze}
            </TableItemNumbers>
          </MainTableCountryItem>
        ))}
      </MainTableCountryList>
    </MainTableContainer>
  );
}

export default MainTable;
