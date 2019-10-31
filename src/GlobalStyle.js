import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

const GlobalStyle = createGlobalStyle`
  ${reboot}
  html,
  body {
    overflow-x: hidden;
    box-sizing: border-box;
  }

  body {
    background-color: #00171f;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #fff;
  }
`;

export default GlobalStyle;
