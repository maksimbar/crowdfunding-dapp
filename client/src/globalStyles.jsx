import { createGlobalStyle } from "styled-components";
import { colors } from "./utils/theme";

const GlobalStyle = createGlobalStyle`
body {
  margin:auto;
  background-color: #101213;
  font-family: sans-serif;
  color:${colors.primaryAlt};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow-x: hidden;
}
h1 {
  font-size: 1.5rem;
}
h2 {
  font-size: 1.25rem;
}
h3 {
  font-size: 1rem;
}
p {
  font-size: .938rem;
  font-weight: 330;
  letter-spacing: 0.2px;
  line-height: 24px;
}
`;

export default GlobalStyle;
