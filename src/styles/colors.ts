import { createGlobalStyle } from "styled-components";

export const AppColors = createGlobalStyle`
  html {
    --primary-color: #2C80D8;
    --secondary-color: #92BCE2;
    --background: #F7F8EC;
    --gray1: #E1E1D7;
    --gray2: #CDCDC3;
    --text-color: #0E1013;
    --danger-color: #D50C47;
    --special-color: #FFCE35;
  }

  .dark-theme {
    --background: #0F1C4D;
  }
`;
