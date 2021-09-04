import styled from "styled-components";

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  height: 100%;

  overflow: auto;

  padding: 20px 25px;
`;

export const CountryHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CountryTitle = styled.h1`
  margin-right: 25px;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CountryTitleIcon = styled.button`
  background-color: transparent;
  font-size: 25px;
  margin-right: 10px;
`;

export const CountryHeaderItem = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const CountryAthetesList = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  width: 100%;
`;

export const CountryAtheteItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  gap: 10px;
`;

export const AhtleteName = styled.h2`
  font-size: 18px;
`;

export const AhtleteDetails = styled.div`
  display: flex;
  gap: 10px;
`;

export const AtheleteSex = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 25px;
  height: 25px;
  border-radius: 3px;
  background-color: var(--gray1);
  ${({ sex }: { sex: "male" | "female" }) =>
    sex === "male"
      ? `
    color: #579ecc;
  `
      : `
    color: #ff66ba;
  `}
`;

export const AtheleteEvents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const EventName = styled.p`
  font-size: 14px;
`;
