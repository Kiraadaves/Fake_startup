import { createGlobalStyle } from "styled-components";
import * as theme from "./ThemeContext";

export const GlobalStyles = createGlobalStyle`
#root {
  font-family: 'Nunito Sans', sans-serif;
}


.color {
  color: #858585;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

`;
