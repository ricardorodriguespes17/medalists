import FilterBar from "../../components/FilterBar";
import MainTable from "../../components/MainTable";
import { MainContainer } from "./styles";

function Main() {
  return (
    <MainContainer>
      <FilterBar />
      <MainTable />
    </MainContainer>
  );
}

export default Main;
