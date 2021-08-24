import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;

    background-color: var(--background);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  h1, h2, h3 {
    color: var(--text-color);
    cursor: default;
  }

  p {
    color: var(--text-color);
    font-weight: 500;
    cursor: default;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
