import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { MedalistsContext } from "../../contexts/MedalistsContext";
import {
  AhtleteDetails,
  AhtleteName,
  AtheleteEvents,
  AtheleteSex,
  CountryAtheteItem,
  CountryAthetesList,
  CountryContainer,
  CountryHeader,
  CountryHeaderItem,
  CountryTitle,
  CountryTitleIcon,
  EventItem,
  EventName,
} from "./styles";
import { FaMale, FaFemale } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

function CountryPage() {
  const history = useHistory();

  const { symbol } = useParams<{ symbol: string }>();

  const { medalists, filterMedalists } = useContext(MedalistsContext);

  const [medals, setMedals] = useState({
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  useEffect(() => {
    filterMedalists(symbol);
    // eslint-disable-next-line
  }, [symbol]);

  useEffect(() => {
    setMedals({
      gold: medalists.reduce((p, c) => (c.medal === "Gold" ? p + 1 : p), 0),
      silver: medalists.reduce((p, c) => (c.medal === "Silver" ? p + 1 : p), 0),
      bronze: medalists.reduce((p, c) => (c.medal === "Bronze" ? p + 1 : p), 0),
    });
  }, [medalists]);

  return (
    <CountryContainer>
      <CountryHeader>
        <CountryTitle>
          <CountryTitleIcon onClick={() => history.push("/")}>
            <FiArrowLeft />
          </CountryTitleIcon>
          {symbol}
        </CountryTitle>

        <CountryHeaderItem>🥇 {medals.gold}</CountryHeaderItem>
        <CountryHeaderItem>🥈 {medals.silver}</CountryHeaderItem>
        <CountryHeaderItem>🥉 {medals.bronze}</CountryHeaderItem>
      </CountryHeader>
      <CountryAthetesList>
        {medalists &&
          medalists.map((item, index) => (
            <CountryAtheteItem key={index}>
              <AhtleteDetails>
                {item.sex === "Men" ? (
                  <AtheleteSex sex="male">
                    <FaMale />
                  </AtheleteSex>
                ) : (
                  <AtheleteSex sex="female">
                    <FaFemale />
                  </AtheleteSex>
                )}
                <AhtleteName>{item.athlete}</AhtleteName>
              </AhtleteDetails>
              <AtheleteEvents>
                <EventItem>
                  <EventName>
                    {item.medal === "Gold"
                      ? "🥇"
                      : item.medal === "Silver"
                      ? "🥈"
                      : "🥉"}
                  </EventName>
                  <EventName>{item.event}</EventName>
                </EventItem>
              </AtheleteEvents>
            </CountryAtheteItem>
          ))}
      </CountryAthetesList>
    </CountryContainer>
  );
}

export default CountryPage;
