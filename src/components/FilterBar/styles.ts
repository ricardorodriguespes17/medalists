import styled from "styled-components";

export const FilterBarContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 70px;
  height: 70px;
`;

export const FilterBarItem = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 7px 10px;
`;

export const InputSearchBox = styled.div`
  max-width: 100%;
  width: 180px;
  height: 40px;

  background-color: var(--gray1);

  border-radius: 8px;

  display: flex;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;

  background-color: transparent;

  padding-left: 8px;
`;

export const IconSearch = styled.div`
  height: 100%;
  aspect-ratio: 1;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonClearFilters = styled.button`
  color: var(--primary-color);
  background: transparent;
`;
