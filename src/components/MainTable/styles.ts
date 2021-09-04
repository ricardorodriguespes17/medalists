import styled from "styled-components";

export const MainTableContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 450px;
  max-width: 100%;
  max-height: calc(100% - 70px);
`;

export const MainTableHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;
  min-height: 50px;

  border-bottom: 2px solid var(--secondary-color);
`;

export const MainTableCountryList = styled.div`
  height: 100%;
  width: 100%;

  overflow: auto;
`;

export const MainTableCountryItem = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;
  min-height: 50px;

  &:nth-child(odd) {
    border-top: 1px solid var(--gray1);
  }

  &:nth-child(even) {
    border-top: 1px solid var(--gray2);
  }
`;

export const TableItemNumbers = styled.p`
  width: 60px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableItemHeaderName = styled.p`
  flex: 1;
  height: 100%;
  font-weight: 400;

  display: flex;
  align-items: center;
`;

export const TableItemName = styled.a`
  flex: 1;
  height: 100%;
  font-weight: 400;

  display: flex;
  align-items: center;

  transition: 250ms;

  &:hover {
    color: var(--primary-color);
  }
`;
