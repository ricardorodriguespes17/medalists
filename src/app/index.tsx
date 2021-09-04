import CountryProvider from "../contexts/CountryContext";
import MedalistsProvider from "../contexts/MedalistsContext";
import Routes from "../routes";
import { AppColors } from "../styles/colors";
import { GlobalStyle } from "../styles/global";

function App() {
  return (
    <MedalistsProvider>
      <CountryProvider>
        <AppColors />
        <GlobalStyle />
        <Routes />
      </CountryProvider>
    </MedalistsProvider>
  );
}

export default App;
