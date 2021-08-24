import { useState } from "react";
import {
  TableItemNumbers,
  MainTableContainer,
  MainTableItem,
  TableItemName,
  MainTableHeader,
  TableItemHeaderName,
} from "./styles";

function MainTable() {
  const [ranking] = useState([
    { name: "EUA", gold: 10, silver: 5, bronze: 10 },
    { name: "BRA", gold: 9, silver: 10, bronze: 9 },
    { name: "ESP", gold: 9, silver: 8, bronze: 15 },
    { name: "GBR", gold: 7, silver: 9, bronze: 13 },
    { name: "FRA", gold: 5, silver: 3, bronze: 12 },
  ]);

  return (
    <MainTableContainer>
      <MainTableHeader>
        <TableItemNumbers>#</TableItemNumbers>
        <TableItemHeaderName>País</TableItemHeaderName>
        <TableItemNumbers>🥇</TableItemNumbers>
        <TableItemNumbers>🥈</TableItemNumbers>
        <TableItemNumbers>🥉</TableItemNumbers>
        <TableItemNumbers>Total</TableItemNumbers>
      </MainTableHeader>
      {ranking.map((item, index) => (
        <MainTableItem>
          <TableItemNumbers>{index + 1}</TableItemNumbers>
          <TableItemName>{item.name}</TableItemName>
          <TableItemNumbers>{item.gold}</TableItemNumbers>
          <TableItemNumbers>{item.silver}</TableItemNumbers>
          <TableItemNumbers>{item.bronze}</TableItemNumbers>
          <TableItemNumbers>
            {item.gold + item.silver + item.bronze}
          </TableItemNumbers>
        </MainTableItem>
      ))}
    </MainTableContainer>
  );
}

export default MainTable;
